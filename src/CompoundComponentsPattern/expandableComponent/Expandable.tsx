import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Header from "./Header";
import Body from "./Body";
import Icon from "./Icon";
import "./Expandable.css";

type ExpandableContextType = {
  toggle: (params: any) => any;
  expanded: boolean;
};

export const ExpandableContext = createContext<ExpandableContextType>({
  toggle: (params: any) => {},
  expanded: false,
});
const { Provider } = ExpandableContext;

interface Props {
  children: ReactNode;
  onExpand: (params: any) => void;
  className?: string;
  shouldExpand?: boolean;
}

const Expandable = ({
  children,
  onExpand,
  className = "",
  shouldExpand,
  ...otherProps
}: Props) => {
  const isExpandControlled = shouldExpand !== undefined;
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );
  const getToggle = isExpandControlled ? onExpand : toggle;
  const componentJustMounted = useRef<boolean>(true);

  useEffect(() => {
    if (componentJustMounted != null && !isExpandControlled) {
      onExpand(expanded);
      componentJustMounted.current = false;
    }
  }, [expanded, onExpand, isExpandControlled]);

  const getState = isExpandControlled ? shouldExpand : expanded;
  const combinedClassNames = ["Expandable", className].join("");
  const value = useMemo(
    () => ({ expanded: getState, toggle: getToggle }),
    [getState, getToggle]
  );

  return (
    <Provider value={value}>
      <div className={combinedClassNames} {...otherProps}>
        {children}
      </div>
    </Provider>
  );
};

export default Expandable;

// Remember this is just a personal reference. It's not mandatory
Expandable.Header = Header;
Expandable.Body = Body;
Expandable.Icon = Icon;

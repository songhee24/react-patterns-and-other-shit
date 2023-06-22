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
  toggle: () => any;
  expanded: boolean;
};

export const ExpandableContext = createContext<ExpandableContextType>({
  toggle: () => {},
  expanded: false,
});
const { Provider } = ExpandableContext;

interface Props {
  children: ReactNode;
  onExpand: (params: any) => void;
  className: string;
}

const Expandable = ({
  children,
  onExpand,
  className = "",
  ...otherProps
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted.current) {
      onExpand(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded]);

  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
  const combinedClassNames = ["Expandable", className].join("");

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

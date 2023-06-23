import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import any = jasmine.any;

type ExpandableContextType = {
  toggle: () => any;
  expanded: boolean;
};

export const ExpandableContext = createContext<ExpandableContextType>({
  toggle: () => any,
  expanded: false,
});
const { Provider } = ExpandableContext;

interface Props {
  children: ReactNode;
  onExpand: (params: any) => void;
}

const Expandable = ({ children, onExpand }: Props) => {
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
  return <Provider value={value}>{children}</Provider>;
};

export default Expandable;

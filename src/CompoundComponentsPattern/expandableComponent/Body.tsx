import { ReactNode, useContext } from "react";
import { ExpandableContext } from "./Expandable";
interface Props {
  children: ReactNode;
  className: string;
}
const Body = ({ children, className = "", ...otherProps }: Props) => {
  const { expanded } = useContext(ExpandableContext);
  const combinedClassNames = ["Expandable-panel", className].join("");
  return (
    <div {...otherProps} className={combinedClassNames}>
      {expanded ? children : null}
    </div>
  );
};
export default Body;

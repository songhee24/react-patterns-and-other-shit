import { ReactNode } from "react";
import "./Body.css";

interface Props {
  children: ReactNode;
  className?: string;
  expanded: boolean;
}
const Body = ({ children, className = "", expanded, ...otherProps }: Props) => {
  const combinedClassNames = ["Expandable-panel", className].join("");
  return (
    <div {...otherProps} className={combinedClassNames}>
      {expanded ? children : null}
    </div>
  );
};
export default Body;

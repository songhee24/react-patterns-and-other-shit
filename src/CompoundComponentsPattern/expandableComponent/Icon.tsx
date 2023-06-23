import { useContext } from "react";
import { ExpandableContext } from "./Expandable";
import "./Icon.css";
interface Props {
  className: string;
}

const Icon = ({ className = "", ...otherProps }: Props) => {
  const { expanded } = useContext(ExpandableContext);
  const combinedClassNames = ["Expandable-icon", className].join("");
  return (
    <span className={combinedClassNames} {...otherProps}>
      {expanded ? "-" : "+"}
    </span>
  );
};
export default Icon;

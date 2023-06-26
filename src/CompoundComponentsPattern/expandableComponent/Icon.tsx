import "./Icon.css";
interface Props {
  className?: string;
  expanded: boolean;
}

const Icon = ({ className = "", expanded, ...otherProps }: Props) => {
  const combinedClassNames = ["Expandable-icon", className].join("");
  return (
    <span className={combinedClassNames} {...otherProps}>
      {expanded ? "-" : "+"}
    </span>
  );
};
export default Icon;

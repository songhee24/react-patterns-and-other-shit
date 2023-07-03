import React, { ReactNode, useContext } from "react";
import { ExpandableContext } from "./Expandable";
import "./Header.css";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  className?: string;
}

const Header = ({ children, className = "", ...otherProps }: Props) => {
  const { toggle } = useContext(ExpandableContext);

  const combinedClassName = ["Expandable-trigger", className]
    .filter(Boolean)
    .join("");
  return (
    <button className={combinedClassName} onClick={toggle} {...otherProps}>
      {children}
    </button>
  );
};
export default Header;

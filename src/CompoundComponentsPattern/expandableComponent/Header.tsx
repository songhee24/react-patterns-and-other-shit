import React, { ReactNode, useContext } from "react";
import { ExpandableContext } from "./Expandable";
import "./Header.css";

interface Props {
  children: ReactNode;
  className?: string;
}

const Header = ({ children, className = "" }: Props) => {
  const { toggle } = useContext(ExpandableContext);

  const combinedClassName = ["Expandable-trigger", className]
    .filter(Boolean)
    .join("");
  return (
    <button className={combinedClassName} onClick={toggle}>
      {children}
    </button>
  );
};
export default Header;

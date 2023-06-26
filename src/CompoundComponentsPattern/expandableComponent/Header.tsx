import React, { ReactNode } from "react";
import "./Header.css";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  className?: string;
  toggle: (params: any) => void;
}

const Header = ({ children, className = "", toggle, ...otherProps }: Props) => {
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

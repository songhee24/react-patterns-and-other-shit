import React, { ReactNode, useContext } from "react";
import { ExpandableContext } from "./Expandable";

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  const { toggle } = useContext(ExpandableContext);
  return <div onClick={toggle}>{children}</div>;
};
export default Header;

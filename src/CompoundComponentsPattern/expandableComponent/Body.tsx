import { ReactNode, useContext } from "react";
import { ExpandableContext } from "./Expandable";
interface Props {
  children: ReactNode;
}
const Body = ({ children }: Props) => {
  const { expanded } = useContext(ExpandableContext);
  return expanded ? children : null;
};
export default Body;

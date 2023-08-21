import { Button as MuiButton } from "@mui/material";

export const Button = ({ children, fullWidth }) => {
  return <MuiButton fullWidth={fullWidth}>{children}</MuiButton>;
};

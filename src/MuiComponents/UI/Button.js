import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";

const StyledMuiButton = styled(MuiButton)({
  backgroundColor: "#8710e8",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#aa52f1",
    boxShadow: "none",
  },
});
export const Button = ({
  size,
  disabled,
  variant = "contained",
  children,
  icon,
  fullWidth,
  loading,
  ...otherProps
}) => {
  return (
    <StyledMuiButton
      size={size}
      variant={variant}
      startIcon={icon}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      {...otherProps}
    >
      {children}
    </StyledMuiButton>
  );
};

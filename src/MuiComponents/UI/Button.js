import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";

const StyledMuiButton = styled(MuiButton)({
  minWidth: "170px",
  height: "44px",
  backgroundColor: "#FCB408",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#f8d06f",
    boxShadow: "none",
  },
  borderRadius: "48px",
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

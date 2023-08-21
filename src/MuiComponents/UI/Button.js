import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";

const StyledMuiButton = styled(MuiButton)({
  minWidth: "170px",
  height: "44px",
  boxShadow: "none",
  "&:hover": {
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

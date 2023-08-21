import { Button as MuiButton } from "@mui/material";

export const Button = ({
  size,
  disabled,
  variant,
  children,
  icon,
  fullWidth,
  loading,
  ...otherProps
}) => {
  return (
    <MuiButton
      size={size}
      variant={variant}
      startIcon={icon}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      {...otherProps}
    >
      {children}
    </MuiButton>
  );
};

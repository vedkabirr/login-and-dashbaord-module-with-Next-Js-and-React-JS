import React from "react";
import { TextField } from "@mui/material";
import { Label, Placeholder } from "../../../constants";

const EmailField = React.forwardRef(({ type, placeholder, ...props }, ref) => {
  return (
    <TextField
      className="mt_1"
      type="email"
      fullWidth
      variant="outlined"
      label={Label.EMAIL}
      placeholder={Placeholder.EMAIL}
      ref={ref}
      {...props}
    />
  );
});

export default EmailField;

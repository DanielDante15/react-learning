import React from "react";
import { TextField } from "@mui/material";
import { MaskField } from "react-mask-field";
import { alpha, styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ECEFF4",
    borderBottom: "outlined",
  },
  "& .MuiInputBase-root": {
    color: "#ECEFF4",
    borderBottom: "outlined",
  },
  "& .MuiInputBase-root:before": {
    color: "#ECEFF4",
    borderBottom: "outlined",
  },
  "& .MuiInputBase-root:": {
    color: "#ECEFF4",
    borderBottom: "outlined",
  },
  "& .MuiFormHelperText-root": {
    color:"#ECEFF4",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
    borderBottom: "0.3vh solid white",
  },
  "& label": {
    color: "#ECEFF4",
  },
  "& label.placeholder": {
    color: "#ECEFF4",
  },
});

function CustomMaskField({ inputRef, ...otherProps }) {
  return (
    <MaskField
      ref={inputRef}
      mask="___.___.___-__"
      replacement="_"
      {...otherProps}
    />
  );
}

// Component with Material UI
export default function Example() {
  return (
    <CustomTextField
      fullWidth
      sx={{ marginBottom: 7, marginTop: 1 }}
      helperText="Digite seu CPF"
      id="standard-multiline-static"
      placeholder="000.000.000-00"
      label="CPF"
      InputProps={{ inputComponent: CustomMaskField }}
      variant="standard"
      size="medium"
    />
  );
}

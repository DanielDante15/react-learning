import React from "react";
import { TextField } from "@mui/material";
import { MaskField } from "react-mask-field";
import { alpha, styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  
  
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
export default function CpfLogin({ cpf, setCpf }) {
  return (
    <CustomTextField
      fullWidth
      sx={{ marginTop: 1,width:300}}
      id="standard-multiline-static"
      placeholder="000.000.000-00"
      label="CPF"
      InputProps={{ inputComponent: CustomMaskField }}
      variant="outlined"
      size="medium"
      value={cpf}
      onChange={(e) => setCpf(e.target.value)}
    />
  );
}

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import Stack from '@mui/material/Stack';




const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#4C566A"),
  backgroundColor: "#3B4252",
  '&:hover': {  
    backgroundColor: "#3B4252",
  },
}));

export default function BtnInstall() {
  return (

      <ColorButton  size="medium" variant="contained" endIcon={<InstallMobileIcon />}> Baixar App</ColorButton>
  );
}

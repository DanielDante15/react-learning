import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';




const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#5E81AC"),
  backgroundColor: "#5E81AC",
  '&:hover': {
    backgroundColor: "#5E81AC",
  },
}));

export default function BtnInstall() {
  return (

      <ColorButton variant="contained">Custom CSS</ColorButton>
  );
}

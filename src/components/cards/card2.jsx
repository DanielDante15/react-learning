import React, { Component } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === "dark" && {main: "#4C566A",}),
    },
    ...(mode === "dark" && {
      background: {
        default: "#4C566A",
        paper: "#fff",
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: "#fff",
            secondary: "#fff",
          }
        : {
            primary: "#4C566A",
            secondary: "#4C566A",
          }),
    },
  },
});

function Card2(props) {
  return (
    <ThemeProvider theme={darkModeTheme}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="280" image={props.img} alt="IMG" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color="#white"
            >
              {props.titulo}
            </Typography>
            <Typography variant="body1" color="#4C566A">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary">
            {props.msg_btn}
          </Button>
        </CardActions>
      </Card>
      </ThemeProvider>
      );
}
const darkModeTheme = createTheme(getDesignTokens("dark"));
export default Card2;
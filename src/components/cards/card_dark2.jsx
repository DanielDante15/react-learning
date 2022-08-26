import React, { Component } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import imagem2 from "../../image/img_viagem.png";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: "#ECEFF4",
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: "#ffff",
        paper: "#4C566A",
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: "#fff",
            secondary: "#fff",
          }
        : {
            primary: "#ffff",
            secondary: "#fff",
          }),
    },
  },
});

function CardDark2(props) {
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
            <Typography variant="body1" color="#D8DEE9">
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
export default CardDark2;

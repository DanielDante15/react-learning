import React, { Component } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import imagem2 from "../../image/img_viagem.png";

function Card2(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={props.size}
          image={props.img}
          alt="IMG"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" color="#2E3440">
            {props.titulo}
          </Typography>
          <Typography variant="body1" color="ActiveBorder">
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
  )
}

export default Card2;

import React, { Component } from "react";
import "../tela2.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import imagem2 from "../image/img_viagem.png";

function Tela2() {
  return (
    <div className="principal">
      <div className="card1">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image={imagem2}
              alt="IMG"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Nudant Trips
              </Typography>
              <Typography variant="body1" color="CaptionText">
                Acumule pontos, ganhe viagens e descontos em muitos outros produtos
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="medium" color="primary">
              Quero ser NuDant
            </Button>
          </CardActions>
        </Card>
      </div>
      <div></div>
    </div>
  );
}

export default Tela2;

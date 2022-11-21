import React from 'react';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Card1(props) {
    return ( 
        <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className='slide-menor'
                 
                    src={props.foto}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {props.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {props.descritivo}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
     );
}

export default Card1;
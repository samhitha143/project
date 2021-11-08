import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './Service.scss';
const Service2 = ({ items }) => {
  return (
    <Card sx={{ maxWidth: 300 }} className="Cards">
     <center>
        <CardMedia component="img" height="200" image={items.imageUrl} className="icons"/>
        </center>
        <CardContent>
          <Typography style={{ fontSize: 25 }} className="title">{items.title}</Typography>
          <Typography variant="body2" color="text.secondary" className="description">
          {items.description}
          </Typography>
          </CardContent>
    </Card>
  );
};

export default Service2;
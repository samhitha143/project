import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Rating from '@mui/material/Rating';

const VegItems = ({ items }) => {
  return (
    <Card sx={{ maxWidth: 300 }} className="vegCards">
      <CardActionArea>
        <CardMedia component="img" height="200" image={items.imageUrl} />
        <CardContent>
          <Typography style={{ fontSize: 30 }}>{items.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {items.description}
          </Typography>
          <div className="rating">
         <h2>{items.price}</h2>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{marginLeft:"1rem"}} />
           </div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VegItems;
import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
const Recipe = ({ recipe }) => {
  const { label, image } = recipe.recipe;

  return (
    <div className="recipe">
      <Card>
        <img src={image} alt={label} />
        <div>
          <h2>{label}</h2>
        </div>
        <CardContent>
          <Typography className="card--Content">
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes.
          </Typography>
        </CardContent>
        <div className="rating">
        <h2>₹ 600</h2>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{marginLeft:"2rem"}} />
           </div>
        <div className="icons">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
      </Card>
    </div>
  );
};

export default Recipe;
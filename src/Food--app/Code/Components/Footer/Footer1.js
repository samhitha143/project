import * as React from "react";
import "./Footer1.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer1 = () => {
  return (
    <div className="footer">
      <Box>
        <Grid container>
          <Grid item xs={12} container className="footerLinks">
            <Grid xs={3}>
              <h3>COMPANY</h3>
              <a href="#">About us</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </Grid>
            <Grid xs={3}>
              <h3>FOR FOODIES</h3>
              <a href="#">Community</a>
              <a href="#">Help</a>
              <a href="#">Mobile Apps</a>
            </Grid>
            <Grid xs={3}>
              <h3>FOR YOU</h3>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
            </Grid>
            <Grid xs={3} className="footer--Social--Icons">
              <h3>FOLLOW US ON </h3>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer1;
import React from 'react'
import {makeStyles} from  '@material-ui/core/styles';
import './Footer.scss';
import  Button  from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const Footer = () => {
    const useStyles=makeStyles(() => ({
        root:{
          minHeight:"100vh",
          backgroundImage:`url(${process.env.PUBLIC_URL +'/Pictures/backgroundpic.webp'})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
        }
      }));
      const classes=useStyles();

    return (
        <div className={classes.root}>
            <div className="footer">
            <h2>Do you have any Project? <span>Let’s Talk</span></h2>
             <p className="footer--p">
             Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium rutrum<br/>
              egestas Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus.
             </p>
             <center>
           <Grid xs={12} container>
             <Grid item xs={3}>
               <div className="button">
               <Button>Behance</Button>
               </div>
             </Grid>
             <Grid item xs={3}>
               <div className="button">
             <Button>Dribbble</Button>
             <SportsBasketballIcon className="icon"/>
             </div>
             </Grid>
             <Grid item xs={3}>
               <div className="button">
             <Button>Medium</Button>
             </div>
             </Grid>
             <Grid item xs={3}>
               <div className="button">
             <Button>Linkedin</Button>
             <LinkedInIcon/>
             </div>
             </Grid>
         </Grid>
         <p className="footer">
         Copyright ©2021 All rights reserved | This template is made with  by Colorlib
         </p>
         </center>
         
             </div>
        
         
           
            
        </div>
    )
}

export default Footer

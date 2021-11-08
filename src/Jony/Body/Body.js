import React from 'react'
import  Button  from '@mui/material/Button';
import './Body.scss';
import {makeStyles} from  '@material-ui/core/styles';
const Body = () => {
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
        <div className="body">
            <div className="body--content">
            <h1 className="body--text">Hi There, I Am Jony
            <br/><span> Creative Director</span></h1>
        <Button className="body--Button">View Works</Button>
            </div>
            <div className="body--image">
                <img src="https://preview.colorlib.com/theme/jony/img/about/xmy_img.png.pagespeed.ic.2_sMuKVfmb.webp" alt="person"/>
            </div>
        </div>
        </div>
    )
}

export default Body

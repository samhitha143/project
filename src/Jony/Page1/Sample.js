import React from 'react';
import {makeStyles} from  '@material-ui/core/styles';

const Sample = () => {
 
        const useStyles=makeStyles(() => ({
          root:{
            minHeight:"100vh",
            backgroundImage:`url(${process.env.PUBLIC_URL +'/Pictures/backgroundpic.webp'})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            marginTop:"5rem",
          }
        }));
        const classes=useStyles();
    return (
        <div className={classes.root}>
         
        </div>
    )
}

export default Sample;

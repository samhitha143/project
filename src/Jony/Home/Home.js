import React from 'react'
import {makeStyles} from  '@material-ui/core/styles';
import './Home.scss';
import  Button  from '@mui/material/Button';
const Home = () => {
        const useStyles=makeStyles(() => ({
            root:{
              minHeight:"100vh",
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
              backgroundColor:"#311e25"
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
        </div>
        </div>
    )
}

export default Home

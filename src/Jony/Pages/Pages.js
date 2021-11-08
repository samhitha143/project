import React from 'react'
import {makeStyles} from  '@material-ui/core/styles';
import './Pages.scss';
const Pages = () => {
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
      <center>
      <h1>Hi There, I Am Jony<br/>
Creative Director Based<br/>
On New York</h1>
      </center>
        </div>
    )
}

export default Pages

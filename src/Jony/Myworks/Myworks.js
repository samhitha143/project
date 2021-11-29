import React from 'react';
import './Myworks.scss';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
const Myworks = () => {
    return (
        <div className="images">
               <h2>My Works</h2>
                <Grid xs={12} container className="images--img">
                
                    <Grid item xs={1}> </Grid>
                <Grid item xs={5}>
                <img src="https://preview.colorlib.com/theme/jony/img/gallery/x1.png.pagespeed.ic.9kHX3IYhMK.webp"></img>
                <div className="matter">
                <h4>Mobile App</h4>
                <a href="#">Colorlib App Project</a>
                </div>
                <img className="img" src="https://preview.colorlib.com/theme/jony/img/gallery/x2.png.pagespeed.ic.6zqj1BZ2C7.webp"></img>
                <div className="matter">
                <h4>Mobile App</h4>
                <a href="#">Colorlib App Project</a>
                </div>
                </Grid>
                <Grid item xs={5}>
                <img src="https://preview.colorlib.com/theme/jony/img/gallery/x3.png.pagespeed.ic.ZhuC7HiZCc.webp" ></img>
                <div className="matter">
                <h4>Mobile App</h4>
                <a href="#">Colorlib App Project</a>
                </div>
                <img  className="img" src="https://preview.colorlib.com/theme/jony/img/gallery/x4.png.pagespeed.ic.PrGnljlTQw.webp"></img>
                <div className="matter">
                <h4>Mobile App</h4>
                <a href="#">Colorlib App Project</a>
                </div>
                <Grid item xs={1}></Grid>
                
               
                </Grid>
                </Grid>
                <Grid xs={12} container>
                   <Grid item xs={1}></Grid>
                   <Grid item xs={10}>
                <Button className="button">My Works</Button>
                </Grid>
                <Grid item xs={1}></Grid>
                </Grid>
            </div>
        
    )
}

export default Myworks

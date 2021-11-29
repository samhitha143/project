import React from 'react'
import Grid from "@mui/material/Grid";
import './Page2.scss';
import Button from '@mui/material/Button';
const Page2 = () => {
    return (
        <div className="background">
            <Grid xs={12} container >
                <h1 className="background--h1">I’m a Creative director based on New York, who loves clean, <br/>simple & unique design. I also enjoy crafting</h1>
                <Grid item xs={6}>
                  <p>
                  Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. 
                  Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.
                   Ut a mi tempus massa malesuada fermentum.
                  </p>
                  <p>
                  Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante.
                   Cras pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget
                  </p>
                  <Button className="background--Button">Download CV</Button>
                 </Grid>
                 <Grid item xs={6}>
                      <div className="heads">
                      <h3>Wireframing</h3>
                      <h4 className="three">90</h4>
                    </div>
                    <div style={{padding:"1px",paddingRight:"2.5rem", backgroundColor:"white", borderRadius:"5px",marginRight:"30rem"}}>
                    <div style={{padding:"2px",paddingRight:"1.2rem", backgroundColor:"#db9a64"}}>
                    </div></div>
                    <div className="heads">
                      <h3>UI/UX</h3>
                      <h4 className="two">70</h4>
                    </div>
                    <div style={{padding:"1px",paddingRight:"5.5rem", backgroundColor:"white", borderRadius:"5px",marginRight:"30rem"}}>
                    <div style={{padding:"2px",paddingRight:"1.2rem", backgroundColor:"#db9a64"}}>
                    </div></div>
                    <div className="heads">
                      <h3>Interaction design</h3>
                      <h4 className="one">45</h4>
                    </div>
                    <div style={{padding:"1px",paddingRight:"5.5rem", backgroundColor:"white", borderRadius:"5px",marginRight:"30rem"}}>
                    <div style={{padding:"2px",paddingRight:"1.2rem", backgroundColor:"#db9a64"}}>
                    </div></div>
                 </Grid>
            </Grid>
        </div>
    )
}

export default Page2

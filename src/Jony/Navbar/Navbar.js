import { AppBar, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import {BrowserRouter as Router,Switch,Link,Route,Redirect} from 'react-router-dom';
import Grid from "@mui/material/Grid";
import './Navbar.scss';
import Button from '@mui/material/Button';
import Home from '../Home/Home'
import NativeSelect from '@mui/material/NativeSelect';
import About from '../About/About'
import Contact from '../Contact/Contact'
import Works from '../Works/Works';
import Pages from '../Pages/Pages';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
const Navbar=()=>{ 
    const [  mobile,setMobile]=useState(false)
    return (
        <Router>
         <div className="Navbar">
         <AppBar style={{backgroundColor:"#311e25"}} >
            <Toolbar>
            <Grid xs={12} container>
             <Grid item xs={3}>
            <img src="data:image/webp;base64,UklGRrQBAABXRUJQVlA4TKcBAAAvUoAJEIegoG0bxuXPoUh3aCho24bxDn+C47ISCELEU/9HUNNIEvIGGLqvyb+zVxCA3vKqPWEpJlFI6uIxYdT7owICVfC3B0iSbFWVzvV3BeEW+98ugtpv1qOI/k+A/uc7wGhLFeLaRw5EG2QgywIoowyEfbFkhnWd4XogB1jvVgDXB0swu8+wPrAA8l0Cwj6wAKg5l45lpj6QA7SuAbg+SAAuSVsAZQZ/YAGk7gTCPjCApNsDYJ0Jm5MDmGQBuD44unanCqQZ0gMLwCUHwr64gKLhCdRBAKxzciCkCri+KEAa7QCDnIDywALYdyDsEwAfrd06sACOOTlQC+D6ER1A2JwFt2E/owqkOfmd63dWgGXOogv7qABpdHSa0AXkOXnn+ugCyugE6lQL7ifWbp1b3d0nqqQDoA0qkKbkf2EDaN0FZEnWXXcHwDan+geWziUtAKckJQDvtgCqHmxfNPcmSQUge4qudVYB6pUK/fpE+T0LiCZp7Ya7bpdgdtej9t4OcEjSFqNdw5ZHddMz+WtLt3WyIwPlbJpdU4W4dtMbVt/SGXHqPzMA" className="log" alt="jony" style={{marginTop:10}}/>
             </Grid>
             <Grid item xs={6}  className="navbar">
            <ul className="links">
             <Link to="/home" className="link" >
                 <li>Home</li>
                 </Link>
             <Link to="/Works" className="link">
             <li>Works</li>
             </Link>
            <Link to="/Services" className="link">
            <li>Services</li></Link>
            <Link to="/Pages" className="link">
            <li>Pages</li></Link>
            <Link to="/About" className="link">
            <li>About</li></Link>
            <Link to="/Contact" className="link">
            <li>Contact</li></Link>          
            </ul>
             <Switch>
                 <Route path="/home" exact component={Home}/>
                 <Route path="/About" exact component={About}/>
                 <Route path="/Contact" exact component={Contact}/>
                 <Route path="/Pages" exact component={Pages}/>
                 <Route path="/Works" exact component={Works}/>
             </Switch>
             </Grid>
            <Grid item xs={3} >
             <Button className="navbar--Button">Lets's Talk</Button>
             <IconButton className="menuicon">
               {mobile ?(<MenuIcon/>):(<CloseIcon/>)} 
            </IconButton>
             </Grid>
            </Grid>
            </Toolbar>
            </AppBar>
        </div>
        </Router>
               
       
    )
}

export default Navbar

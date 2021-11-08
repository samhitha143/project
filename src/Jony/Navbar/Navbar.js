import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
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
const Navbar=()=>{   
    return (
        <Router>
         <div className="Navbar">
         <AppBar style={{backgroundColor:"#311e25"}} >
            <Toolbar>
            <Grid xs={12} container>
             <Grid item xs={3}>
            <img src="data:image/webp;base64,UklGRrQBAABXRUJQVlA4TKcBAAAvUoAJEIegoG0bxuXPoUh3aCho24bxDn+C47ISCELEU/9HUNNIEvIGGLqvyb+zVxCA3vKqPWEpJlFI6uIxYdT7owICVfC3B0iSbFWVzvV3BeEW+98ugtpv1qOI/k+A/uc7wGhLFeLaRw5EG2QgywIoowyEfbFkhnWd4XogB1jvVgDXB0swu8+wPrAA8l0Cwj6wAKg5l45lpj6QA7SuAbg+SAAuSVsAZQZ/YAGk7gTCPjCApNsDYJ0Jm5MDmGQBuD44unanCqQZ0gMLwCUHwr64gKLhCdRBAKxzciCkCri+KEAa7QCDnIDywALYdyDsEwAfrd06sACOOTlQC+D6ER1A2JwFt2E/owqkOfmd63dWgGXOogv7qABpdHSa0AXkOXnn+ugCyugE6lQL7ifWbp1b3d0nqqQDoA0qkKbkf2EDaN0FZEnWXXcHwDan+geWziUtAKckJQDvtgCqHmxfNPcmSQUge4qudVYB6pUK/fpE+T0LiCZp7Ya7bpdgdtej9t4OcEjSFqNdw5ZHddMz+WtLt3WyIwPlbJpdU4W4dtMbVt/SGXHqPzMA" alt="jony" style={{marginTop:10}}/>
             </Grid>
             <Grid item xs={6}  className="navbar">
            
             <Link to="/home" className="link" >Home</Link>
             <Link to="/Works" className="link">Works</Link>
            <Link to="/Services" className="link">Services</Link>
            <Link to="/Pages" className="link">Pages</Link>
            <Link to="/About" className="link">About</Link>
           <NativeSelect className="link">
              <option  value={10}>Blog</option >
              <option  value={20}>Blog item</option >
          </NativeSelect>
            <Link to="/Contact" className="link">Contact</Link>          
             </Grid>
             <Switch>
                 <Route path="/home" exact component={Home}/>
                 <Route path="/About" exact component={About}/>
                 <Route path="/Contact" exact component={Contact}/>
                 <Route path="/Pages" exact component={Pages}/>
                 <Route path="/Works" exact component={Works}/>
             </Switch>
            <Grid item xs={3} >
             <Button className="navbar--Button">Lets's Talk</Button>
             </Grid>
            </Grid>
            </Toolbar>
            </AppBar>
        
        </div>
        </Router>
               
       
    )
}

export default Navbar

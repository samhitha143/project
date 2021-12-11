import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Jonyy from '../Images/Jonyy.webp';
import './Navs.scss';
import {BrowserRouter as Router,Switch,Link,Route,Redirect} from 'react-router-dom';
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Works from '../Works/Works';
import Pages from '../Pages/Pages';
const Navs = () => {
    return (
        <Router>
        <div>
            <Navbar style={{backgroundColor:"#311e25",color:"#fff"}} expand="lg">
  <Container>
    <Navbar.Brand href="#home">
        <img src={Jonyy}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/home"  style={{color:"#db9a64", textDecoration: "none"}}>Home</Link>
        <Link to="/works"   style={{color:"#db9a64", marginLeft:"1rem",textDecoration: "none"}}>Works</Link>
        <NavDropdown title="Pages" id="basic-nav-dropdown" style={{marginLeft:"1rem"}}>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Link to="/services"   style={{color:"#db9a64",marginLeft:"1rem",textDecoration: "none"}}>Services</Link>
        <NavDropdown title="Blog" id="basic-nav-dropdown" style={{marginLeft:"1rem",textDecoration: "none"}}>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        </NavDropdown>
        <Link to="/About"   style={{color:"#db9a64",marginLeft:"1rem",textDecoration: "none"}}>About</Link>
        <Link to="/Contact"   style={{color:"#db9a64",marginLeft:"1rem",textDecoration: "none"}}>Contact</Link>
        <button className="navbar--Button">Lets's Talk</button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Switch>
        <Route path="/home" exact component={Home}/>
         <Route path="/About" exact component={About}/>
         <Route path="/Contact" exact component={Contact}/>
         <Route path="/Pages" exact component={Pages}/>
         <Route path="/Works" exact component={Works}/>
 </Switch>
        </div>
        </Router>

    )
}

export default Navs

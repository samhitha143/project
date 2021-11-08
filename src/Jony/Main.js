import React from 'react'
import Service from './Jony/Services/Service'
import Navbar from './Jony/Navbar/Navbar';
import Body from './Jony/Body/Body';
import Page2 from './Jony/Page2/Page2';
import Myworks from './Jony/Myworks/Myworks';
import Footer from './Jony/Footer/Footer'
const App = () => {
 
  return (

    <div>
     <Navbar/>
     <Body/>
     <Page2/>
     <Service/>
     <Myworks/>
     <Footer/>
      {/*<Router>
                <Link to="/"><li>Home</li></Link>
                <Link to="/Works">Works</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Pages">Pages</Link>
                <Link to="/About">About</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Contact">Contact</Link>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route Path="/Works" exact component={Home}></Route>
                    <Route Path="/Services" exact component={Home} ></Route>
                    <Route Path="/Pages" exact component={Home}></Route>
                    <Route Path="/About" exact component={Home}></Route>
                    <Route Path="/Blog" exact component={Home}></Route>
                    <Route Path="/Contact" exact component={Home} ></Route>
                </Switch>
            </Router>

           */}
    </div>
  )
}

export default App

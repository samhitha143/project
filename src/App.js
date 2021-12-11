import React from 'react'
import Service from './Jony/Services/Service'
//import Navbar from './Jony/Navbar/Navbar';
import Body from './Jony/Body/Body';
import Page2 from './Jony/Page2/Page2';
import Myworks from './Jony/Myworks/Myworks';
import Footer from './Jony/Footer/Footer'
import Navs from './Jony/Navs/Navs';
const App = () => {
 
  return (

    <div>
     <Navs/>
     <Body/>
     <Page2/>
     <Service/>
     <Myworks/>
     <Footer/>
    
    </div>
  )
}

export default App

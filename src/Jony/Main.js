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
    </div>
  )
}

export default App

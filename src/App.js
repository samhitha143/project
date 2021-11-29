import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Quizcee/Home/Home';
import Instructions from './Quizcee/Instructions/Instructions';
import Quizpage from './Quizcee/Quizpage/Quizpage';
//import Quizsummary from './Quizcee/Quizpage/Quizsummary';
const App = () => {
    return (
       <Router>
          
            <Route path="/" exact component={Home}></Route>
            <Route path="/play" exact component={Instructions}></Route>
            <Route path="/play/start" exact component={Quizpage}></Route>
            {/* <Route path="/play/summary" exact component={Quizsummary}></Route> */}
           
       </Router>
    )
}

export default App

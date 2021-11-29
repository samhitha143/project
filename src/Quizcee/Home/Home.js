import React from 'react'
import {Link} from 'react-router-dom';
import './Home.scss';
const Home = () => {
    return (
        <div className="home">
            <section>
            <h1>QUIZCEE</h1>
            <div className="play-button">
            <Link to="/play" className="button">play</Link>
            </div>
            <div className="auth-buttons">
                <Link to="/login" className="auths" id="red">LogIn</Link>
                <Link to="/signup" className="auths" id="blue">SignUp</Link>
        </div>
        </section>
        </div>
    )
}

export default Home

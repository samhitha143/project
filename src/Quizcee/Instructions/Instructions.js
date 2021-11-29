import React from 'react';
import { Link } from 'react-router-dom';
import'./Instructions.scss';
const Instructions = () => {
    return (
        <div className="bgimg">
        <div className="styles">
             <h1>QUIZCEE INSTRUCTIONS</h1>
            <div className="para">
             <p>1.Ensure you read this guide from start to finish.</p>
             <p>2.The game has a duration of 5 minutes and ends as soon as your time elapses.</p>
             <p>3.This game consists of 15 questions</p>
             <p>4.Every question contains 4 options.</p>
             <p>5.Selecting a 50-50 lifeline by clicking the icon  will remove 2 wrong answers, leaving the correct answer and one wrong answer</p>
             <p>6.Using a hint by clicking the icon  will remove one wrong answer leaving two wrong answers
                 and one correct answer. You can use as many hints as possible on a single question.</p>
             <p>7.Feel free to quit (or retire from) the game at any time. In that case your score will be revealed afterwards.</p>
             <p>8.The timer starts as soon as the game loads.</p>
             <p>9.Let's do this if you think you've got what it takes?</p>
             <p>10.To start, click the " Let's Play" button. When finished, click the "Submit Quiz" button.</p>
             </div>
             <div className="buttons">
                 <Link to="/" className="backbutton">Back</Link>
                 <Link to="/play/start" className="playbutton"> Let's Play</Link>
             </div>
        </div>
        </div>
    )
}

export default Instructions

import React, { Component } from 'react'
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import { Link } from 'react-router-dom';
import './Quizsummary.scss';

export default class Quizsummary extends Component {
    constructor(props){
        super(props);
        this.state={
        score:0,
        numberOfAnsweredQuestions:0,
        numberOfQuestions:0,
        correctAnswers:0,
        wrongAnswers:0,
        fiftyFiftyUsed:0,
        hintsUsed:0,
        }
    }
    componentDidMount(){
        const {state}=this.props.location;
        this.setState({
            score:(state.score/state.numberOfQuestions) * 100,
            numberOfAnsweredQuestions:state.numberOfAnsweredQuestions,
            numberOfQuestions:state.numberOfQuestions,
            correctAnswers:state.correctAnswers,
            wrongAnswers:state.wrongAnswers,
            fiftyFiftyUsed:state.fiftyFiftyUsed,
            hintsUsed:state.hintsUsed,
            })
    }
    render() {
        const{state}=this.props.location;
        let stats,remark;
        const userScore =this.state.score;
          if (userScore <= 30 ) {
            remark = 'You need more practice!';
        } else if (userScore > 30 && userScore <= 50) {
            remark = 'Better luck next time!';
        } else if (userScore<= 70 && userScore > 50) {
            remark = 'You can do better!';
        } else if (userScore >= 71 && userScore <= 84) {
            remark = 'You did great!';
        } else {
            remark = 'You\'re an absolute genius!';
        }
        if(state !== undefined){
            stats=(
                <>
                <div style={{textAlign:'center'}}>
        <ThumbUpAltSharpIcon className="icon"/>
                </div><br/>
                <h1>Quiz has Ended</h1>
                <div className="stats">
                    <h4>{remark}</h4>
                    <h2>You Score:{this.state.score.toFixed(0)}&#37;</h2>
                    <span className="stat left">Total number of questions:</span>
                    <span className="right" style={{marginLeft:"24rem"}}>{this.state.numberOfQuestions}</span><br/>

                    <span className="stat left">Total number of answered questions:</span>
                    <span className="right"  style={{marginLeft:"20rem"}}>{this.state.numberOfAnsweredQuestions}</span><br/>

                    <span className="stat left"> Correct answers:</span>
                    <span className="right"  style={{marginLeft:"28rem"}}>{this.state.correctAnswers}</span><br/>

                    <span className="stat left">Wrong answers:</span>
                    <span className="right"  style={{marginLeft:"28.7rem"}}>{this.state.wrongAnswers}</span><br/>

                    <span className="stat left">Fifty-Fifty used:</span>
                    <span className="right"  style={{marginLeft:"28.7rem"}}>{this.state.fiftyFiftyUsed}</span><br/>

                    <span className="stat left">Hints used:</span>
                    <span className="right"  style={{marginLeft:"30.7rem"}}>{this.state.hintsUsed}</span>

                </div>
                <section>
                    <ul>
                        <li>
                        <Link to="/">Back To Home</Link>
                        </li>
                        <li>
                        <Link to="/play/start">Play Again</Link>
                        </li>
                    </ul>
                    
                </section>
              </>
            );
        }else{
            stats=(
                <>
             <section>
                 <h1 className="nostats">No Statistics Available</h1>
                <ul>
                <li>
                <Link to="/">Back To Home</Link>
                </li>
                <li>
                <Link to="/play/start">Take the Quiz</Link>
                </li>
            </ul>
             </section>
             </>
            );
        }
        return (
            <div className="quiz-summary">
                {stats}
            </div>
        )
    }
}

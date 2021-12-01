import React, { Component } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import QuizIcon from '@mui/icons-material/Quiz';
import './Quizpage.scss';
import questions from './questions';
import isEmpty from '../utils/isEmpty';
import M from 'materialize-css';
import wrongSound from '../assets/sounds/wrong.mp3';
import correctSound from '../assets/sounds/correct.mp3';
import nextSound from '../assets/sounds/next.mp3';
import classnames from 'classnames'
export default class Quizpage extends Component {
    constructor(props){
        super(props);
        this.state={
            questions,
            currentQuestion:{},
            nextQuestion:{},
            previousQuestion:{},
            answer:'',
            numberOfQuestions:0,
            numberOfAnsweredQuestions:0,
            currentQuestionIndex:0,
            score:0,
            correctAnswers:0,
            wrongAnswers:0,
            hints:5,
            fiftyFifty:2,
            prevDisableButton:true,
            nextDisableButton:false,
            previousRandomNumber:[],
            usedFiftyFifty:false,
            time:{},
        };
        this.interval=null
        this.correctSound=React.createRef();
        this.wrongSound=React.createRef();
        this.nextSound=React.createRef();
    }
     componentDidMount(){
            const{questions,currentQuestion,nextQuestion,previousQuestion}=this.state;
            this.displayQuestions(questions,nextQuestion,currentQuestion,previousQuestion)
            this.startTimer();
        }
        componentWillUnmount(){
            clearInterval(this.interval);
        }
       
         displayQuestions=(questions=this.state.questions,currentQuestion,nextQuestion,previousQuestion)=>{
          let{currentQuestionIndex}=this.state;
          if(!isEmpty(this.state.questions)){
              questions=this.state.questions;
              currentQuestion=questions[currentQuestionIndex];
              nextQuestion=questions[currentQuestionIndex+1];
              previousQuestion=questions[currentQuestionIndex-1];
              const answer=currentQuestion.answer;
                this.setState({
              currentQuestion,
              nextQuestion,
              previousQuestion,
              numberOfQuestions:questions.length,
              answer,
              previousRandomNumber:[],
          },()=>{
              this.showOptions();
              this.handleDisableButton();
          })
            }
        }
    handleOnChange=(e)=>{
    if(e.target.innerHTML !== this.state.answer){
        setTimeout(()=>{
            this.correctSound.current.play();
        },300);
           this.wrongAnswers();
    }else{
        setTimeout(()=>{
           this.correctSound.current.play();
        },300);
         this.correctAnswers();
    }
          };
          playButtonClick=()=>{
              this.nextSound.current.play();
          };
    
    correctAnswers=()=>{
            M.toast({
                html:"correct Answer",
                classes:"toast-valid",
                displayLength:1500,
            });
            this.setState(prevState=>({
                score:prevState.score +1,
                correctAnswers:prevState.correctAnswers+1,
                currentQuestionIndex:prevState.numberOfAnsweredQuestions+1,
                numberOfAnsweredQuestions:prevState.numberOfAnsweredQuestions+1,
            }),()=>{
                if(this.state.nextQuestion === undefined){
                    this.endGame();
                }else{
                this.displayQuestions(this.state.nextQuestion,this.state.previousQuestion,this.state.currentQuestion,this.state.questions);
                }
            })
        }
    wrongAnswers=()=>{
        M.toast({
            html:"Wrong Answer",
            classes:"toast-invalid",
            displayLength:1500,
        });
        this.setState(prevState=>({
            wrongAnswers:prevState.wrongAnswers+1,
            currentQuestionIndex:prevState.numberOfAnsweredQuestions+1,
            numberOfAnsweredQuestions:prevState.numberOfAnsweredQuestions+1,
        }),()=>{
            if(this.state.nextQuestion === undefined){
                this.endGame();
            }else{
            this.displayQuestions(this.state.nextQuestion,this.state.previousQuestion,this.state.currentQuestion,this.state.questions);
            }
        })
    };
    handleNextClick=()=>{
        this.playButtonClick();
        if(this.state.nextQuestion !== undefined){
            this.setState(prevState=>({
                currentQuestionIndex:prevState.currentQuestionIndex+1
            }),()=>{
                this.displayQuestions(this.state.nextQuestion,this.state.previousQuestion,this.state.currentQuestion,this.state.questions);
            })
        }
    };
    handlePreviousClick=()=>{
        this.playButtonClick();
        if(this.state.nextQuestion !== undefined){
            this.setState(prevState=>({
                currentQuestionIndex:prevState.currentQuestionIndex-1
            }),()=>{
                this.displayQuestions(this.state.nextQuestion,this.state.previousQuestion,this.state.currentQuestion,this.state.questions);
            })
        }
    };
    handleQuitClick=()=>{
        this.playButtonClick();
        if(window.confirm("Are you sure,Want to quit the game?")){
            this.props.history.push("/");
        }
    }
    handleMoveClick=(e)=>{
switch(e.target.id){
    case "next-button":
        this.handleNextClick();
        break;
        case "previous-button":
            this.handlePreviousClick();
            break;
       case "quit-button":
           this.handleQuitClick();
           break;
    default:
        break;
}
    }
    showOptions=()=>{
        const options=Array.from(document.querySelectorAll(".select"));
        options.forEach(select=>{
            select.style.visibility="visible"
        });
        this.setState({
            usedFiftyFifty:false,
        })
    }
    handleHints=()=>{
        this.playButtonClick();
        if(this.state.hints > 0){
        const options=Array.from(document.querySelectorAll(".select"));
        let indexOfAnswer;
        options.forEach((select,index)=>{
            if(select.innerHTML === this.state.answer){
                indexOfAnswer=index;
            }
        });
        while(true){
            const randomNumber=Math.round(Math.random()*3);
            if(randomNumber !==indexOfAnswer && !this.state.previousRandomNumber.includes(randomNumber)){
                options.forEach((select,index)=>{
                    if(index ===randomNumber){
                        select.style.visibility="hidden";
                        this.setState((prevState)=>({
                        hints:prevState.hints - 1,
                        previousRandomNumber:prevState.previousRandomNumber.concat(randomNumber),
                        }))
                    }
                });
                break;
            }
        }
    }
}
handleFiftyFifty=()=>{
    this.playButtonClick();
    if(this.state.fiftyFifty > 0 && this.state.usedFiftyFifty === false){
        const options=document.querySelectorAll(".select");
        const randomNumbers=[];
        let indexOfAnswer;
        options.forEach((select,index)=>{
            if(select.innerHTML === this.state.answer){
                indexOfAnswer=index;
            }
        });
        let count=0;
        do{
            const randomNumber =Math.round(Math.random()*3);
            if(randomNumber !== indexOfAnswer){
                if(randomNumbers.length<2 &&!randomNumbers.includes(randomNumber)&& !randomNumbers.includes(indexOfAnswer)){
                      randomNumbers.push(randomNumber)
                      count ++;
                }else{
                    while(true){
                        const newRandomNumber =Math.round(Math.random()*3);
                        if(randomNumbers.includes(newRandomNumber)&& !randomNumbers.includes(indexOfAnswer)){
                            randomNumbers.push(newRandomNumber);
                            count ++;
                            break;
                        }
                    }
                }
            }
        }while(count<2);
        options.forEach((select,index)=>{
            if(randomNumbers.includes(index)){
                select.style.visibility="hidden";
            }
        });
        this.setState(prevState=>({
            fiftyFifty: prevState.fiftyFifty -1,
            usedFiftyFifty:true
        }))
    }
}
startTimer=()=>{
    const counDownTimer=Date.now() + 300000;
    this.interval=setInterval(() => {
        const now =new Date();
        const distance =counDownTimer -now;
        const minutes =Math.floor((distance%(1000*60*60))/(1000*60));
        const seconds =Math.floor((distance%(1000*60))/1000);
        if(distance<0){
            clearInterval(this.interval);
            this.setState({
                time:{
                    seconds:0,
                    minutes:0,
                }
            },()=>{
                this.endGame();
            });
        }else{
            this.setState({
                time:{
                    minutes,
                    seconds
                }
            })
        }
    }, 1000);
}
handleDisableButton=()=>{
    if(this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0){
        this.setState({
            prevDisableButton:true
        }); 
    } else{
        this.setState({
            prevDisableButton:false
        });
    }
    if(this.state.nextQuestion ===undefined || this.state.currentQuestionIndex===this.state.numberOfQuestions){
        this.setState({
            nextDisableButton:true
        }); 
    } else{
        this.setState({
            nextDisableButton:false
        });
    }
}
endGame=()=>{
    alert("Quiz is Ended,Redirecting to ScorePage");
    const {state}=this;
    const playerscore={
        score:state.score,
        numberOfAnsweredQuestions:state.numberOfAnsweredQuestions,
        numberOfQuestions:state.numberOfQuestions,
        correctAnswers:state.correctAnswers,
        wrongAnswers:state.wrongAnswers,
        fiftyFiftyUsed:2-state.fiftyFifty,
        hintsUsed:5-state.hints,
    }
    console.log(playerscore);
    setTimeout(() => {
        this.props.history.push('/play/summary',playerscore);
    }, 1000);
}
    render() {
        const {currentQuestion,currentQuestionIndex,time, hints,numberOfQuestions,fiftyFifty}=this.state;
        return (
            
            <div className="whole">
                <div>
                <audio ref={this.correctSound} src={correctSound}></audio>
                <audio ref={this.wrongSound} src={wrongSound}></audio>
                <audio ref={this.nextSound} src={nextSound}></audio>
            </div>
                <div className="questions">
                <h1>QUIZCEE</h1>
                    <div className="icons">
                    <p onClick={this.handleFiftyFifty}><span className="line"><QuizIcon/></span>{fiftyFifty}</p>
                    <p onClick={this.handleHints}>
                    <span className="line"><TipsAndUpdatesIcon/></span>{hints}</p>                  
                   </div>
                  <div className="icons">
                      <p>
                      <span>{currentQuestionIndex+1} of {numberOfQuestions}</span>
                  </p>
                  <p>
                    <span className="time"> {time.minutes}:{time.seconds}</span>   
                    <span className="timeicon"><AccessTimeIcon/></span>
                    </p>
                  </div>
                 
                   <h5>{currentQuestion.question}</h5>
               
                <div className="options">
                    <p onClick={this.handleOnChange} className="select">{currentQuestion.optionB}</p>
                    <p onClick={this.handleOnChange} className="select">{currentQuestion.optionA}</p>
                </div>
                <div className="options">
                    <p onClick={this.handleOnChange} className="select">{currentQuestion.optionC}</p>
                    <p onClick={this.handleOnChange} className="select">{currentQuestion.optionD}</p>
                </div>
                <div className="buttons">
                 <button
                 className={classnames('',{"disable":this.state.prevDisableButton})}
                  id="previous-button" 
                  onClick={this.handleMoveClick}
                  >Previous</button>
                 <button 
                 className={classnames('',{"disable":this.state.nextDisableButton})}
                 id="next-button"
                  onClick={this.handleMoveClick}>Next</button>
                 <button id="quit-button" onClick={this.handleMoveClick} >Quit</button>
                </div>
            </div>
            </div>
        )
    }
}

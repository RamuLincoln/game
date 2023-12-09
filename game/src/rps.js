import './main.css';
import React, {Component, useEffect, useState} from 'react';
import rock from './images/icon-rock.svg';
import paper from './images/icon-paper.svg';
import scissor from './images/icon-scissors.svg';
import Nav from './Nav';

class Rps extends Component{
    constructor(props) {
        super(props)
        this.state = {
            playerVal : null,
            computerVal : null,
            gameCount: 0,
            playerScore: 0,
            compScore: 0,
            rockcount: 0,
            papercount: 0,
            scissorcount: 0,
            new : null,
        };
    }
    logic = (playerVal, computerVal)=>{
        if(playerVal === computerVal){
            return 0;
        } else if ((playerVal === "ROCK" && computerVal === "SCISSORS") ||
            (playerVal === "SCISSORS" && computerVal === "PAPER") ||
            (playerVal === "PAPER" && computerVal === "ROCK")
        ) {
            return 1;
        } else {
            return -1;
        }
    }
    decision = (playerChoice)=> {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const compChoice =  choices[Math.floor(Math.random() * choices.length)];
        const val = this.logic(playerChoice, compChoice)
      //  if(this.state.gameCount < 5){
            if(playerChoice === "ROCK") {
                this.setState({ 
                    rockcount : this.state.rockcount +1,
                    gameCount : this.state.gameCount + 1
                })
            } else if(playerChoice === "PAPER") {
                this.setState({ 
                    papercount : this.state.papercount + 1,
                    gameCount : this.state.gameCount + 1
                })
            }else if(playerChoice === "SCISSORS") {
                this.setState({ 
                    scissorcount : this.state.scissorcount + 1,
                    gameCount : this.state.gameCount + 1
                })
            }
            if(val === 1) {
                console.log("Hello")
                this.setState({
                    playerVal: playerChoice,
                    computerVal : compChoice, 
                    playerScore : this.state.playerScore +1
                })
            } else if(val === -1) {
                console.log("Hello")
                this.setState({
                    playerVal: playerChoice,
                    computerVal : compChoice,
                    compScore : this.state.compScore +1
                })
            } else {
                console.log("Hello")
                this.setState({
                    computerVal : compChoice,
                    playerVal : playerChoice
                })
            }
        //}
    }
    click(type){
        // this.setState.rockcount + 1;
        this.decision(type)
    }
    render (){
        const {playerVal, computerVal, playerScore, compScore, rockcount, papercount, scissorcount, gameCount} = this.state;
        return(
            <div>
            <div className='box'>
                <div className='name'>
                    <h2>Rock</h2>
                    <h2>Paper</h2>
                    <h2>Scissor</h2>
                </div>
                <div className='score'>
                    <div className='res'>
                        <h6>Score</h6>
                        <h1 className='num'>{playerScore}</h1>
                    </div>
                </div>
            </div>
            <div className='main'>
                <p> GameCount : {gameCount}</p>
                <p> PlayerScore : {playerScore} PlayerChoice : {playerVal} </p>
                <p> ComputerScore : {compScore} ComputerChoice : {computerVal} </p>
                
            </div>
            <div className='rps'>
                <div className='rocks'>
                    <button onClick={()=>this.click("ROCK")} className='btn'><img src={rock} className="rock" alt="logo" /></button>
                    <h1> Rock </h1>
                </div>
                <div className='papers'>
                    <button onClick={()=>{this.decision("PAPER")}} className='btn'><img src={paper} className="paper" alt="logo" /></button>
                <h1> Paper </h1>
                </div>
                <div className='scissors'>
                    <button onClick={()=>{this.decision("SCISSORS")}} className='btn'><img src={scissor} className="scissor" alt="logo" /></button>
                <h1> Scissors </h1>
                </div>
            </div>
      
    </div>
  )
}
}

export default Rps;
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.games = 0
    this.computerPlay = this.computerPlay.bind(this);
    this.setWinner = this.setWinner.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.gameHandler = this.gameHandler.bind(this);
    this.gameWinner = this.gameWinner.bind(this);

    // state initialised
    this.state = {
      computerChoice: "",
      humanChoice: "",
      totalGames: 0,
    }
  }

  // this method makes a random selection for the computer

  computerPlay() {
    const computerSelection = (Math.floor(Math.random() * 3));
    if (computerSelection === 0) {
      return "paper"
    }
    if (computerSelection === 1) {
      return "rock"
    }
    if (computerSelection === 2) {
      return "scissors"
    }
  }

  gameHandler(event) {
    const computerChoice = this.computerPlay();
    const humanChoice = event.target.id
    this.setState((prevState) => ({
      computerChoice,
      humanChoice,
      totalGames: prevState.totalGames + 1,
    }))
  }

  gameWinner() {
    const compCounts;
    const humanCounts;

    if (this.computerChoice === "paper" && this.humanChoice === "rock") {
      compCounts ++;
    }
    if (this.computerChoice === "rock" && this.humanChoice === "scissors") {
      compCounts ++
    }
    if (this.computerChoice === "scissors" && this.humanChoice === "paper") {
      return "compWin"
    }
    if (this.computerChoice === "paper" && this.humanChoice === "scissors") {
      return "humanWin"
    }
    if (this.computerChoice === "rock" && this.humanChoice === "paper") {
      return "humanWin"
    }
    if (this.computerChoice === "scissors" && this.humanChoice === "rock") {
      return "humanWin"
    }
  }


  setWinner() {
    const total = this.state.totalGames
    if ((total === 5) && (this.state.computerScore < this.state.humanScore)) {
      return "You Won the set of five games. Click Reset to play another set"
    }
    if ((total === 5) && (this.state.computerScore > this.state.humanScore)) {
      return "The Computer won the set of five games. Click Reset to play another set"
    }
    if ((total === 5) && (this.state.computerScore === this.state.humanScore)) {
      return "There was a Tie in this set. Click Reset to Replay"
    }
  }

  resetHandler() {
    this.setState((prevState) => ({
      computerChoice: "",
      humanChoice: "",
      totalGames: 0,
      computerScore: 0,
      humanScore: 0,
      ties: 0
    }))
  }



  // this function returns jsx 
  render() {
    return (
      <div>
        <div>The computer's Choice: {this.state.computerChoice}</div><br />
        <div>Your Choice: {this.state.humanChoice}</div> <br />
        <div>Total Games Played: {this.state.totalGames}</div><br />
        <div>Your total score is {this.state.humanScore}</div> <br />
        <div>Computer total score is : {this.state.computerScore}</div><br />
        <div>Total number of ties: {this.state.ties}</div> <br />
        <button onClick={this.gameHandler} id="scissors">SCISSORS</button>
        <button onClick={this.gameHandler} id="paper">PAPER</button>
        <button onClick={this.gameHandler} id="rock">ROCK</button>
        <button onClick={this.resetHandler}>RESET </button> <br />
        <div>{this.setWinner()}</div>
      </div>
    )
  }


}

export default App;


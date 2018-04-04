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

    this.state = {
      computerChoice: "",
      humanChoice: "",
      totalGames: 0,
    }
  }


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
      totalGames: prevState.totalGames + 1
    }))
  }
  setWinner() {
    const computer = this.state.computerChoice
    const human = this.state.humanChoice
    if (computer === human) {
      return "Its a Tie"
    }
    if (computer === "paper" && human === "rock") {
      return "Computer Wins"
    }
    if (computer === "rock" && human === "scissors") {
      return "computer Wins"
    }
    if (computer === "scissors" && human === "paper") {
      return "Computer Wins"
    }
    if (computer === "paper" && human === "scissors") {
      return "You Win"
    }
    if (computer === "rock" && human === "paper") {
      return "You Win"
    }
    if (computer === "scissors" && human === "rock") {
      return "You Win"
    }
  }


  resetHandler() {
    this.setState((prevState) => ({
      computerChoice: "",
      humanChoice: "",
      totalGames: 0,
    }))
  }

  render() {
    return (
      <div>
        <div>The computer's Choice: {this.state.computerChoice}</div><br />
        <div>Your Choice: {this.state.humanChoice}</div> <br />
        <div>Total Games Played: {this.state.totalGames}</div><br />
        <button onClick={this.gameHandler} id="scissors">SCISSORS</button>
        <button onClick={this.gameHandler} id="paper">PAPER</button>
        <button onClick={this.gameHandler} id="rock">ROCK</button>
        <button onClick={this.resetHandler} id="rock">RESET</button> <br />
        <div>{this.setWinner()}</div>
      </div>
    )
  }


}

export default App;


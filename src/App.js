import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.computerPlay = this.computerPlay.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.gameHandler = this.gameHandler.bind(this);
    this.tieState = this.tieState.bind(this);
    this.compWinState = this.compWinState.bind(this);
    this.humanWinState = this.humanWinState.bind(this);
    this.setWinner = this.setWinner.bind(this);

    this.state = {
      computerChoice: "",
      humanChoice: "",
      totalGames: 0,
      computerCount: 0,
      humanCount: 0,
      ties: 0
    }
  }

  // This function makes a random selection for the computer.
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

  // This helper function categorising all the possible outccomes into three categories.
  setCategory(computer, human) {
    if (computer === human) {
      return "A Tie"
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

  // This function will set State based on a tie game.
  tieState(computer, human) {
    this.setState((prevState) => ({
      computerChoice: computer,
      humanChoice: human,
      totalGames: prevState.totalGames + 1,
      computerCount: prevState.computerCount,
      humanCount: prevState.humanCount,
      ties: prevState.ties + 1
    }))
  }
  // This function will set state based on a win by the computer.
  compWinState(computer, human) {
    this.setState((prevState) => ({
      computerChoice: computer,
      humanChoice: human,
      totalGames: prevState.totalGames + 1,
      computerCount: prevState.computerCount + 1,
      humanCount: prevState.humanCount,
      ties: prevState.ties
    }))
  }

  // This function will set state based on a win by the player.

  humanWinState(computer, human) {
    this.setState((prevState) => ({
      computerChoice: computer,
      humanChoice: human,
      totalGames: prevState.totalGames + 1,
      computerCount: prevState.computerCount,
      humanCount: prevState.humanCount + 1,
      ties: prevState.ties
    }))
  }

  // This function puts it all together. It calls our helper functions and ultimately sets state

  gameHandler(event) {
    const computerChoice = this.computerPlay();
    const humanChoice = event.target.id
    const winner = this.setCategory(computerChoice, humanChoice)
    if (winner === "A Tie") {
      this.tieState(computerChoice, humanChoice)
    }
    if (winner === "Computer Wins") {
      this.compWinState(computerChoice, humanChoice)
    }
    if (winner === "You Win") {
      this.humanWinState(computerChoice, humanChoice)
    }
  }

  // This function determines what gets returned in the html
  setWinner() {
    const total = this.state.totalGames
    const humanChoice = this.state.humanChoice
    const computerChoice = this.state.computerChoice
    const category = this.setCategory(computerChoice, humanChoice)
    if (total === 5 && category === "A Tie") {
      return "A Tie in this set of 5. No Obvious winner"
    }
    if (total === 5 && category === "You Win") {
      return "Congratulations. You Won the SET of 5 games"
    }
    if (total === 5 && category === "Computer Wins") {
      return "Computer won this set of 5 games"
    }
    if (total < 5 && category === "You Win") {
      return category
    }
    if (total < 5 && category === "Computer Wins") {
      return category
    }
    if (total < 5 && category === "A Tie") {
      return category
    }
  }

  // This function resets state to its initial starting value.
  resetHandler() {
    this.setState((prevState) => ({
      computerChoice: "",
      humanChoice: "",
      totalGames: 0,
      computerCount: 0,
      humanCount: 0,
      ties: 0
    }))
  }

  render() {
    return (
      <div>
        <div>The computer's Choice: {this.state.computerChoice}</div><br />
        <div>Your Choice: {this.state.humanChoice}</div> <br />
        <div>Total Games Played: {this.state.totalGames}</div><br />
        <div>Games won by the Computer: {this.state.computerCount}</div> <br />
        <div>Games won by you: {this.state.humanCount}</div> <br />
        <div>Number of Ties: {this.state.ties} </div> <br />
        <button onClick={this.gameHandler} id="scissors">SCISSORS</button>
        <button onClick={this.gameHandler} id="paper">PAPER</button>
        <button onClick={this.gameHandler} id="rock">ROCK</button>
        <button onClick={this.resetHandler}>RESET</button> <br />
        <div>{this.setWinner()}</div>
      </div>
    )
  }


}

export default App;

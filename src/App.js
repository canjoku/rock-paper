import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleRock = this.handleRock.bind(this);
    this.handlePaper = this.handlePaper.bind(this);
    this.handleScissors = this.handleScissors.bind(this);
    this.computerPlay = this.computerPlay.bind(this);
    this.game = this.game.bind(this);
    this.show = this.show.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.winner = this.winner.bind(this);
    this.decisionHandler = this.decisionHandler.bind(this);

    this.state = {
      computer: "",
      human: "",
      status: "",
      computerCount: 0,
      humanCount: 0,
      totalCount: 0,
      ties: 0,
    }
  }

  computerPlay = () => {
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
  decisionHandler(choice) {
    const compState = () => {
      this.setState((prevState) => ({
        computer,
        human: choice,
        computerCount: prevState.computerCount + 1,
        totalCount: prevState.totalCount + 1
      }))
    }

    const humanState = () => {
      this.setState((prevState) => ({
        computer,
        human: choice,
        humanCount: prevState.humanCount + 1,
        totalCount: prevState.totalCount + 1
      }))
    }

    const computer = this.computerPlay()
    if (choice === computer) {
      this.setState((prevState) => ({
        computer,
        human: choice,
        totalCount: prevState.totalCount + 1,
        ties: prevState.ties + 1
      }))
    }
    if (choice === "scissors" && computer === "rock") {
      compState();
    }
    if (choice === "scissors" && computer === "paper") {
      humanState();
    }
    if (choice === "rock" && computer === "scissors") {
      humanState();
    }
    if (choice === "rock" && computer === "paper") {
      compState();
    }
    if (choice === "paper" && computer === "rock") {
      humanState();
    }
    if (this.human === "paper" && computer === "scissors") {
      compState();
    }
  }
  handleRock() {
    this.decisionHandler("rock")
  }

  handlePaper() {
    this.decisionHandler("paper")
  }

  handleScissors() {
    this.decisionHandler("scissors")
  }

  game() {
    if (this.state.human === this.state.computer) {
      return (<div>No Winner in this game</div>)
    }
    if (this.state.human === "scissors" && this.state.computer === "rock") {
      return (<div>Computer Won this game</div>)
    }
    if (this.state.human === "scissors" && this.state.computer === "paper") {
      return (<div>You Won this game</div>)
    }
    if (this.state.human === "rock" && this.state.computer === "scissors") {

      return (<div>You Won this</div>)
    }
    if (this.state.human === "rock" && this.state.computer === "paper") {

      return (<div>Computer Won this game</div>)
    }
    if (this.state.human === "paper" && this.state.computer === "rock") {

      return (<div>You Won this game</div>)
    }
    if (this.state.human === "paper" && this.state.computer === "scissors") {

      return (<div>Computer Won this game</div>)
    }
  }

  handleReset() {
    this.setState((prevState) => ({
      computer: "",
      human: "",
      status: "",
      computerCount: 0,
      humanCount: 0,
      totalCount: 0,
      ties: 0,
    }))
  }

  winner() {
    const total = this.state.totalCount
    const computer = this.state.computerCount
    const player = this.state.humanCount
    const click = "Click reset to start all over"
    if (total === 5 && computer > player) {
      return (
        <div>
          You Wont his set {click}
        </div>
      )
    }
    if (total % 5 === 0 && player > computer) {
      return (
        <div>
          You Won this set {click} 
        </div>
      )
    }
    if (total % 5 === 0 && player === computer) {
      return (
        <div>
          A Tie. No Winner. {click}
        </div>
      )
    }

  }

  show() {
    const humanChoice = this.state.human
    if (humanChoice) {
      return (<div>You have chosen {this.state.human} while the computer has chosen {this.state.computer}</div>)
    }
  }
  render() {
    return (
      <div className = "container">
        <div>
          <div>
            <h1>Rock Paper Scissors</h1>
            <div className="container1">
              <div className="item1">Your Count: {this.state.humanCount}</div>
              <div className="item1">Computer Count: {this.state.computerCount}</div>
              <div className="item1">Total number of ties: {this.state.ties}</div>
              <div className="item1">Total Number of Games played: {this.state.totalCount}</div>
            </div>
            <div className="container2">
              <div className="item2">{this.state.status}</div>
              <div className="item2 show">{this.show()}</div>
              <div className="item2 game">{this.game()}</div>
              <div className="item2 winner">{this.winner()}</div>
            </div>
          </div>
          <div className="container3">
            <div className="item3">
              <button onClick={this.handleScissors}>SCISSORS</button>
            </div>
            <div className="item3">
              <button onClick={this.handlePaper}>PAPER</button>
            </div>
            <div className="item3">
              <button onClick={this.handleRock}>ROCK</button>
            </div>
            <div className="item3">
              <button onClick={this.handleReset}>RESET</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;


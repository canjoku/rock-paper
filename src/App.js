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
  handleRock() {
    const computer = this.computerPlay()
    const human = "rock"
    if (human === computer) {
      this.setState({
        computer,
        human,
        totalCount: this.state.totalCount + 1,
        ties: this.state.ties + 1
      })
    }
    if (human === "scissors" && computer === "rock") {
      this.setState(
        {
          computer,
          human,
          computerCount: this.state.computerCount + 1,
          totalCount: this.state.totalCount + 1
        })
    }
    if (human === "scissors" && computer === "paper") {
      this.setState({
        computer,
        human,
        humanCount: this.state.humanCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "rock" && computer === "scissors") {
      this.setState({
        computer,
        human, humanCount:
          this.state.humanCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "rock" && computer === "paper") {
      this.setState({
        computer,
        human,
        computerCount: this.state.computerCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "paper" && computer === "rock") {
      this.setState({
        computer,
        human, humanCount: this.state.humanCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "paper" && computer === "scissors") {
      this.setState({
        computer,
        human,
        computerCount: this.state.computerCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }

  }
  handlePaper() {
    const computer = this.computerPlay()
    const human = "paper"
    if (human === computer) {
      this.setState({
        computer,
        human,
        totalCount: this.state.totalCount + 1,
        ties: this.state.ties + 1
      })
    }
    if (human === "scissors" && computer === "rock") {
      this.setState(
        {
          computer,
          human,
          computerCount: this.state.computerCount + 1,
          totalCount: this.state.totalCount + 1
        })
    }
    if (human === "scissors" && computer === "paper") {
      this.setState({
        computer,
        human,
        humanCount: this.state.humanCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "rock" && computer === "scissors") {
      this.setState({
        computer,
        human, humanCount:
          this.state.humanCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "rock" && computer === "paper") {
      this.setState({
        computer,
        human,
        computerCount: this.state.computerCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "paper" && computer === "rock") {
      this.setState({
        computer,
        human, humanCount: this.state.humanCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "paper" && computer === "scissors") {
      this.setState({
        computer,
        human,
        computerCount: this.state.computerCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }

  }
  handleScissors() {
    const computer = this.computerPlay()
    const human = "scissors"
    if (human === computer) {
      this.setState({
        computer,
        human,
        totalCount: this.state.totalCount + 1,
        ties: this.state.ties + 1
      })
    }
    if (human === "scissors" && computer === "rock") {
      this.setState(
        {
          computer,
          human,
          computerCount: this.state.computerCount + 1,
          totalCount: this.state.totalCount + 1
        })
    }
    if (human === "scissors" && computer === "paper") {
      this.setState({
        computer,
        human,
        humanCount: this.state.humanCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "rock" && computer === "scissors") {
      this.setState({
        computer,
        human, humanCount:
          this.state.humanCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "rock" && computer === "paper") {
      this.setState({
        computer,
        human,
        computerCount: this.state.computerCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "paper" && computer === "rock") {
      this.setState({
        computer,
        human, humanCount: this.state.humanCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
    if (human === "paper" && computer === "scissors") {
      this.setState({
        computer,
        human,
        computerCount: this.state.computerCount + 1,
        totalCount: this.state.totalCount + 1
      })
    }
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
    this.setState({
      computer: "",
      human: "",
      status: "",
      computerCount: 0,
      humanCount: 0,
      totalCount: 0,
      ties: 0,
    })
  }

  winner() {
    const total = this.state.totalCount
    const computer = this.state.computerCount
    const player = this.state.humanCount
    if (total % 5 === 0 && computer > player) {
      return (
        <div>
          The Computer Won this set.
        </div>
      )
    }
    if (total % 5 === 0 && player > computer) {
      return (
        <div>
          You Won this set.
        </div>
      )
    }
    if (total % 5 === 0 && player === computer) {
      return (
        <div>
          A Tie. No Winner
        </div>
      )
    }

  }

  show() {
    const item = this.state.human
    if (item) {
      return (<div>You have chosen {this.state.human} while the computer has chosen {this.state.computer}</div>)
    }
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Rock Paper Scissors</h1>
            <div>
              <div>Your Count: {this.state.humanCount}</div>
              <div>Computer Count: {this.state.computerCount}</div>
              <div>Total number of ties: {this.state.ties}</div>
              <div>Total Number of Games played: {this.state.totalCount}</div>
              <div>{this.state.status}</div>
              <div>{this.show()}</div>
              <div>{this.game()}</div>
              <div>{this.winner()}</div>
            </div>
          </div>
          <nav>
            <ul className="container">
              <li className="item">
                <button onClick={this.handleScissors}>SCISSORS</button>
              </li>
              <li className="item">
                <button onClick={this.handlePaper}>PAPER</button>
              </li>
              <li className="item">
                <button onClick={this.handleRock}>ROCK</button>
              </li>
              <li className="item">
                <button onClick={this.handleReset}>RESET</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}



export default App;


import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    
    this.computerPlay = this.computerPlay.bind(this)
    this.setOutcome = this.setOutcome.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
    this.gameHandler = this.gameHandler.bind(this)
    this.setTieState = this.setTieState.bind(this)
    this.setCompWinState = this.setCompWinState.bind(this)
    this.setHumanWinState = this.setHumanWinState.bind(this)
    this.showWinner = this.showWinner.bind(this)
    this.initialState = {
      computerChoice: null,
      humanChoice: null,
      totalGames: 0,
      computerCount: 0,
      humanCount: 0,
      roundWinner: null,
      ties: 0
    }

    this.state = this.initialState
  }

  actions () {
    if (this.state.totalGames < 5) {
      return <div>
        <button onClick={() => { this.gameHandler('scissors') }}>SCISSORS</button>
        <button onClick={() => { this.gameHandler('paper') }}>PAPER</button>
        <button onClick={() => { this.gameHandler('rock') }}>ROCK</button>
      </div>
    } else {
      return <button onClick={this.resetHandler}>Play Again</button>
    }
  }

  // This function makes a random selection for the computer.
  computerPlay () {
    const computerSelection = (Math.floor(Math.random() * 3))
    let readableComputerSelection

    switch (computerSelection) {
      case 0:
        readableComputerSelection = 'paper'
        break
      case 1:
        readableComputerSelection = 'rock'
        break
      case 2:
        readableComputerSelection = 'scissors'
        break
      default:
        break
    }
    this.setState((prevState) => ({
      ...prevState,
      computerChoice: readableComputerSelection
    }))

    return readableComputerSelection
  }

  // This helper function categorising all the possible outccomes into three categories.
  setOutcome (computerChoice, humanChoice) {
    if (computerChoice === humanChoice && computerChoice !== null) {
      return 'A Tie'
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      return 'Computer Wins'
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
      return 'computer Wins'
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
      return 'Computer Wins'
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
      return 'You Win'
    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
      return 'You Win'
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
      return 'You Win'
    }
  }

  // This function will set State based on a tie game.
  setTieState () {
    this.setState((prevState) => ({
      ...prevState,
      ties: prevState.ties + 1
    }))
  }
  // This function will set state based on a win by the computer.
  setCompWinState () {
    this.setState((prevState) => ({
      ...prevState,
      computerCount: prevState.computerCount + 1
    }))
  }

  // This function will set state based on a win by the player.
  setHumanWinState () {
    this.setState((prevState) => ({
      ...prevState,
      humanCount: prevState.humanCount + 1
    }))
  }

  // This function puts it all together. It calls our helper functions and ultimately sets state
  gameHandler (humanChoice) {
    // Increase the number of games we have played
    this.setState(prevState => ({
      ...prevState,
      totalGames: prevState.totalGames + 1,
      humanChoice: humanChoice
    }))

    const computerChoice = this.computerPlay()

    const winner = this.setOutcome(computerChoice, humanChoice)

    switch (winner) {
      case 'A Tie':
        this.tieState()
        break
      case 'Computer Wins':
        this.compWinState()
        break
      case 'You Win':
        this.humanWinState()
        break
      default:
        break
    }
  }

  // This function determines what gets returned in the html
  showRoundWinner () {

    // Read from state and show who won the round
    if (outcome === 'You Win') {
      return outcome
    } else if (totalGames < 5 && outcome === 'Computer Wins') {
      return outcome
    } else if (totalGames < 5 && outcome === 'A Tie') {
      return outcome
    }
  }

  showSetWinner () {
    const { totalGames } = this.state

      // Read from state and show who won the set based on number of total wins
    if (totalGames === 5 && outcome === 'A Tie') {
      return 'A Tie in this set of 5. No Obvious winner'
    } else if (totalGames === 5 && outcome === 'You Win') {
      return 'Congratulations. You Won the SET of 5 games'
    } else if (totalGames === 5 && outcome === 'Computer Wins') {
      return 'Computer won this set of 5 games'
    }
  }

  // This function resets state to its initial starting value.
  resetHandler () {
    this.setState(this.initialState)
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <div>The computer's Choice: {this.state.computerChoice}</div><br />
        <div>Your Choice: {this.state.humanChoice}</div> <br />
        <div>Total Games Played: {this.state.totalGames}</div><br />
        <div>Games won by the Computer: {this.state.computerCount}</div> <br />
        <div>Games won by you: {this.state.humanCount}</div> <br />
        <div>Number of Ties: {this.state.ties} </div> <br />
        {this.actions()}
        <div>{this.showWinner()}</div>
      </div>
    )
  }
}

export default App

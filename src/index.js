import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return(
      <button onClick={this.props.onClick}>{this.props.value}</button>
    )
  }
}

class Board extends React.Component {
  render() {
    const game = this.props.game.slice();

    return(
      <div>
        <Square value={game[0]} onClick={() => this.props.handleOnClick(0)}/>
        <Square value={game[1]} onClick={() => this.props.handleOnClick(1)}/>
        <Square value={game[2]} onClick={() => this.props.handleOnClick(2)}/>
        <br />
        <Square value={game[3]} onClick={() => this.props.handleOnClick(3)}/>
        <Square value={game[4]} onClick={() => this.props.handleOnClick(4)}/>
        <Square value={game[5]} onClick={() => this.props.handleOnClick(5)}/>
        <br />
        <Square value={game[6]} onClick={() => this.props.handleOnClick(6)}/>
        <Square value={game[7]} onClick={() => this.props.handleOnClick(7)}/>
        <Square value={game[8]} onClick={() => this.props.handleOnClick(8)}/>
      </div>
    )
  }
}

class Game extends React.Component {
  state = {
    games: [{game: Array(9).fill(null)}],
    xIsNext: true,
    currentIndex: 0,
  }

  handleOnClick(i) {
    const currentIndex = this.state.currentIndex;
    const currentGame = this.state.games[currentIndex].game;
    let game = currentGame.slice();
    const nextTurn = this.state.xIsNext? "X":"O";
    
    if ((game[i] == null) && (this.checkWinner(game) === false)) {
      game[i] = nextTurn;
      
      this.setState({
        games: this.state.games.concat({
          game: game,
        }),
        xIsNext: !this.state.xIsNext,
        currentIndex: currentIndex + 1,
      })
    }
  }

  checkWinner(game) {
    const winnerChecker = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < winnerChecker.length; i++) {
      const value1 = game[winnerChecker[i][0]];
      const value2 = game[winnerChecker[i][1]];
      const value3 = game[winnerChecker[i][2]];

      if ((value1 === null || value2 === null) || value3 === null) {
        return false;
      }

      if (value1 === value2 && value1 === value3) {
        return value1;
      }
    }
    return false;
  }

  jumpTo(index) {
    this.setState({
      currentIndex: index,
    })
  }

  render() {
    const games = this.state.games;
    const currentIndex = this.state.currentIndex;
    const currentGame = games[currentIndex].game;

    // set game step list
    const moves = games.map((game, index) => {
      // when index is 0 "Go to game start"
      const desc = index ? 'Go to move #' + index : 'Go to game start';

      return (
        <li key={index}>
          <button onClick={() => this.jumpTo(index)}>{desc}</button>
        </li>
      );
    });
    
    // set game status message
    let gameStatus = this.checkWinner(currentGame);
    const nextTurn = this.state.xIsNext? "X":"O";
    if (gameStatus === false) {
      gameStatus =  nextTurn + " turn";
    } else {
      gameStatus = nextTurn + " is winner!";
    }

    return(
      <div>
        <div>
          <h1>{gameStatus}</h1>
        </div>
        <div>
          <Board game={currentGame} 
                 handleOnClick={(i) => this.handleOnClick(i)}
          />
        </div>
        <div>
          <ul>
            {moves}
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
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
    game: Array(9).fill(null),
    xIsNext: true,
  }

  handleOnClick(i) {
    let game = this.state.game.slice();
    const nextTurn = this.state.xIsNext? "X":"O";
    
    if (game[i] == null) {
      game[i] = nextTurn;
      
      this.setState({
        game: game,
        xIsNext: !this.state.xIsNext,
      })
    }
  }

  render() {
    const nextTurn = this.state.xIsNext? "X":"O";

    return(
      <div>
        <div>
          <h1>{nextTurn} turn</h1>
        </div>
        <div>
          <Board game={this.state.game} 
                 handleOnClick={(i) => this.handleOnClick(i)}
          />
        </div>
        <div>
          <ul>
            <li>Go to start game (test)</li>
            <li>Go to step #1 (test)</li>
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return(
      <button onClick={this.props.onClick}>X</button>
    )
  }
}

class Board extends React.Component {
  render() {
    const game = this.props.game.slice();

    return(
      <div>
        <Square value={game[0]} onClick={() => this.props.handleOnClick(0)}/>
        {/* <Square value={game[0]}/><Square value={game[1]}/><Square value={game[2]}/> */}
        {/* <br />
        <Square value={game[3]}/><Square value={game[4]}/><Square value={game[5]}/>
        <br />
        <Square value={game[6]}/><Square value={game[7]}/><Square value={game[8]}/> */}
      </div>
    )
  }
}

class Game extends React.Component {
  state = {
    game: Array(9).fill('X'),
  }

  handleOnClick(i) {
    console.log("handleOnclick method excuted")
  }

  render() {
    return(
      <div>
        <div>
          <h1>'X' turn (test)</h1>
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
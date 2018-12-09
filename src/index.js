import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return(
      <button>X</button>
    )
  }
}

class Board extends React.Component {
  render() {
    return(
      <div>
        <Square /><Square /><Square />
        <br />
        <Square /><Square /><Square />
        <br />
        <Square /><Square /><Square />
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return(
      <div>
        <div>
          <h1>'X' turn (test)</h1>
        </div>
        <div>
          <Board />
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
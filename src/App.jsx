// import saves and style
import { useState } from 'react'
import './App.css'

// make cell  and click event. return view
function Square({ value, onSquareClick, win }) {
  return (
    <button className={`square ${'val-' + value} ${win ? 'win' : ''}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

// make board. return view
function Board({ xIsNext, squares, onPlay, currentMove }) {

  function handleClick(i) {
    // does not allow you to re-click on a cell
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // new array
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  const draw = currentMove === 9;
  let status;
  if (winner) {
    // if win
    status = "Winner: " + winner[0];
  } else if (draw) {
    // if drawn
    status = "Darw";
  } else {
    // next move
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // calculate if someone won. return array or null
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [squares[a], lines[i]];
      }
    }
    return null;
  }

  // make board. return view
  function genBoard(winBoxes = []) {

    // make cell. return view
    function genBox(i, win = false) {
      return <Square key={`box-${i}`} value={squares[i]} onSquareClick={() => handleClick(i)} win={win} />
    }

    let structure = [];
    for (let i = 0; i < 3; i++) {
      let box = [];
      for (let y = i * 3; y < i * 3 + 3; y++) {
        box.push(genBox(y, winBoxes.includes(y)));
      }
      structure.push(<div key={`row-${i}`} className="board-row">{box}</div>);
    }
    return structure;
  }

  return (
    <>
      <div className="status">{status}</div>
      {genBoard(winner ? winner[1] : [])}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  // currrent move. reutrn void
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // history game. return void
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // text move
  const moves = history.map((squares, move) => {
    let description;
    if (currentMove === move) {
      description = 'You are at move ' + move;
      return (
        <li key={move}><h4>{description}</h4></li>
      );
    }
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <main>
        <h1>Tic-Tac-Toe</h1>
        <div className="game">
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      </main>
    </>
  );
}

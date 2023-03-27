import React, {useState} from 'react'
import Cell from './Cell'
import '../App.css'

export default function Box() {
    const [player, setPlayer] = useState(Array(9).fill(null));
    const [nextPlayer, setNextPlayer] = useState(true);
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 1, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function handleClick(index) {
        if (winner() || player[index]) {
            return;
        }
        const updatedCell = player.slice();
        updatedCell[index] = nextPlayer ? 'X' : '0';
        setPlayer(updatedCell);
        setNextPlayer(!nextPlayer);
    }
    function winner () {
        for (let i = 0; i<winningConditions.length; i ++) {
            const [a, b, c] = winningConditions[i];
            if (player[a] && player[a] === player[b] && player[a] === player[c]) {
                return player[a];
            }
        }
        return null;
    }

    const win = winner();
    let status;
    if (win) {
        status = "winner is : " + win;
    }
    else {
        status = "next turn : " + (nextPlayer ? "X" : "0");
    }
  return (

    <>
    <h1 id='title'>Tic-Tac-Toe</h1>
    <div className='mainBox'>
        <Cell value = {player[0]} handleClick = {() => handleClick(0)}/>
        <Cell value = {player[1]} handleClick = {() => handleClick(1)}/>
        <Cell value = {player[2]} handleClick = {() => handleClick(2)}/>
    {/* </div>
    <div className='mainBox'> */}
        <Cell value = {player[3]} handleClick = {() => handleClick(3)}/>
        <Cell value = {player[4]} handleClick = {() => handleClick(4)}/>
        <Cell value = {player[5]} handleClick = {() => handleClick(5)}/>
    {/* </div>
    <div className='mainBox'> */}
        <Cell value = {player[6]} handleClick = {() => handleClick(6)}/>
        <Cell value = {player[7]} handleClick = {() => handleClick(7)}/>
        <Cell value = {player[8]} handleClick = {() => handleClick(8)}/>
    </div>
    <h1 id='result'>{status}</h1>
    </>
  )
}

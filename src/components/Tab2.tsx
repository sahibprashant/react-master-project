import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Confetti from 'react-confetti'
import '../styles/Tab2.css'
import Square from './Square';
import Default from './common/Default'


export default function Tab2() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [winningPlayer, setWinnerPlayer] = useState('');

    function onClick(value: any) {
        const boardCopy = [...board];
        if (winner || boardCopy[value] || isFinished)
            return;
        boardCopy[value] = xIsNext ? 'O' : 'X';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);

        //calculate winner on every move!!
        if (calculateWinner(boardCopy)) {
            setWinner(true);
            setIsFinished(true);
        }
    }

    function calculateWinner(boardCopy: any) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (boardCopy[a] && boardCopy[a] == boardCopy[b] && boardCopy[a] == boardCopy[c]) {
                setWinnerPlayer(boardCopy[a]);
                return boardCopy[a];
            }
        }

        if (boardCopy.some((ele: any) => ele == null)) {
            //game is on
        } else {
            setIsFinished(true);
        }

        return null;
    }

    function playAgain() {
        setBoard(Array(9).fill(null));
        setIsFinished(false);
        setXIsNext(true);
        setWinner(false);
    }

    return (
        <Default>
            <div className="tab2--parent">
                <Helmet>
                    <title>Tick-Tac-Toe</title>
                    <meta name="description" content='page related cotent' />
                    <link rel='canonical' href='/tab3' />
                </Helmet>
                {winner && <Confetti />}
                {winner ? `Winner is ${winningPlayer}` : ""}
                <h2 onClick={winner || isFinished ? playAgain : () => { }}>
                    {winner || isFinished ? <>Play Again</> : <>Tic-Tac-Toe</>}
                </h2>
                <div className="tab2--board">
                    {
                        board.map((square, index) => (
                            <Square key={index} value={square} onClick={() => onClick(index)} />
                        ))
                    }
                </div>
            </div>
        </Default>
    )
}
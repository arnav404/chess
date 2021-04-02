import React from 'react'
import './Board.css'
import { useState, useEffect } from 'react'
import Square from '../Square/Square'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import possibleSquares from '../../Data/PossibleSquares'

const Board = () => {
    
    // Current state of the board
    var [board, setBoard] = useState(
        [   
            ["br","bn","bb","bq","bk","bb","","br"],
            ["bp","bp","bp","bp","bp","bp","wp","bp"],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","wp",""],
            ["bn","bp","","","","","",""],
            ["wp","wp","wp","wp","wp","wp","wp","wp"],
            ["wr","wn","wb","wq","wk","wb","wn","wr"]
        ]
    )

    // Possible moves when piece is selected
    var [possibleMoves, setPM] = useState([])

    // Current clicked square
    var [clickedSquare, setClicked] = useState(99)

    // Function is called when a square is clicked
    const clicked = (i, j, piece) => {
        if(possibleMoves.includes(10*i+j)) {
            var temp = board[Math.trunc(clickedSquare/10)][clickedSquare % 10]
            board[Math.trunc(clickedSquare/10)][clickedSquare % 10] = ""
            board[i][j] = temp
        }
        setPM(possibleSquares(board, 10*i+j))
        setClicked(10*i+j)
    }

    return (
        <div className="board">
            {board.map((row, i) => {
                return <Row>
                    {board[0].map((square, j) => {return <Col className="nopadding" onClick={() => clicked(i, j)} ><Square currentPiece={board[i][j]} isPM={possibleMoves.includes(10*i+j)} isClicked={(10*i+j) === clickedSquare} square={10*i+j} /></Col>})}
                </Row>
            })}
        </div>
    )
}

export default Board

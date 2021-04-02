import React from 'react'
import './Board.css'
import { useState, useEffect } from 'react'
import Square from '../Square/Square'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Board = () => {
    
    // Current state of the board
    var [board, setBoard] = useState(
        [   
            ["br","bn","bb","bq","bk","bb","bn","br"],
            ["bp","bp","bp","bp","bp","bp","bp","bp"],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["wp","wp","wp","wp","wp","wp","wp","wp"],
            ["wr","wn","wb","wq","wk","wb","wn","wr"]
        ]
    )

    // Current clicked square
    var [clickedSquare, setClicked] = useState(99)

    const clicked = (i, j) => {
        setClicked(10*i+j)
    }

    useEffect(() => {
        console.log("RENDER")
    })

    return (
        <div className="board">
            {board.map((row, i) => {
                return <Row>
                    {board[0].map((square, j) => {return <Col className="nopadding" onClick={() => clicked(i, j)} ><Square isClicked={(10*i+j) === clickedSquare} square={10*i+j} /></Col>})}
                </Row>
            })}
        </div>
    )
}

export default Board

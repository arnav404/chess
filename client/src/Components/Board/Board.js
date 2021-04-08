//Frontend
import React from 'react'
import { useState, useEffect } from 'react'

//Styling
import './Board.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'

//Components
import Square from '../Square/Square'

//Game Logic
import possibleSquares from '../../Data/PossibleSquares'
import check from '../../Data/Check'


const Board = (props) => {

    // Which color are you (boardRotation changes the board view)
    var [boardRotation, setBR] = useState("0deg")

    // Possible moves when piece is selected
    var [possibleMoves, setPM] = useState([])

    // Current clicked square
    var [clickedSquare, setClicked] = useState(99)

    //Called every render
    useEffect(() => {
        console.log(props.side)
        console.log(props.board)
        console.log(props.whoseMove)
        if(props.side == 'b')
            setBR("180deg")
    }, [props.side])

    // Function is called when a square is clicked
    const clicked = (i, j) => {

        // If the square clicked is pink
        if(possibleMoves.includes(10*i+j)) {

            //We need to create a new instance of the board
            var tempBoard = []
            for(var one = 0; one < 8; one++) {
                var arr = []
                for(var two = 0; two < 8; two++) {
                    arr.push(props.board[one][two])
                }
                tempBoard.push(arr)
            }

            console.log(tempBoard)

            //Let's make the move
            var temp = tempBoard[Math.trunc(clickedSquare/10)][clickedSquare % 10]
            tempBoard[Math.trunc(clickedSquare/10)][clickedSquare % 10] = ""
            tempBoard[i][j] = temp

            // Deslect all squares
            setClicked(99)
            setPM([])

            
            var whose = 'w'

            if(props.whoseMove == 'w') {
                whose = 'b'
            }

            props.setWM(whose)
            props.setBoard(tempBoard)

        } 
        
        // User clicks a non-pink square
        else if (props.canMove && props.board[i][j].charAt(0) === props.side && props.whoseMove === props.side) {

            // This is the list of possible squares the selected piece can jump
            var possibles = possibleSquares(props.board, 10*i+j)

            //We need to verify that these moves are legal
            var verifiedMoves = []

            //Let's loop through each move
            for(var it = 0; it < possibles.length; it++) {

                //We need to create a new instance of the board
                var tempBoard = []
                for(var one = 0; one < 8; one++) {
                    var arr = []
                    for(var two = 0; two < 8; two++) {
                        arr.push(props.board[one][two])
                    }
                    tempBoard.push(arr)
                }

                //Let's make the move
                var temp = tempBoard[i][j]
                tempBoard[i][j] = ""
                tempBoard[Math.trunc(possibles[it]/10)][possibles[it] % 10] = temp

                //Check if it is legal. If it is, add it to verifiedMoves
                if(!check(tempBoard, props.board[i][j].charAt(0))) {
                    console.log("HERE")
                    verifiedMoves.push(possibles[it])
                }
                    
            }

            //Make pink squares the verified moves
            setPM(verifiedMoves)


            //Set the clicked square to orange
            setClicked(10*i+j)

        } else {

            //Set the clicked square to orange
            setClicked(10*i+j)
            setPM([])

        }
    }

    return (
        <div style={{transform: "rotate("+boardRotation+")"}} className="board">
            {props.board.map((row, i) => {
                return <Row>
                    {props.board[i].map((square, j) => {
                        return <Col className="nopadding" onClick={() => clicked(i, j)} >
                            <Square currentPiece={props.board[i][j]} 
                            side={props.side}
                            isPM={possibleMoves.includes(10*i+j)} 
                            isClicked={(10*i+j) === clickedSquare} 
                            square={10*i+j} />
                        </Col>})
                    }
                </Row>
            })}
        </div>
    )
}

export default Board

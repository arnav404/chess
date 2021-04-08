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

//Socket.io
import io from 'socket.io-client'

let socket;

var connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", 
    "timeout" : 10000,                  
    "transports" : ["websocket"]
};

const Board = () => {

    const ENDPOINT = 'localhost:5555'

    // Which color are you (boardRotation changes the board view)
    var [side, setSide] = useState('w')
    var [boardRotation, setBR] = useState("0deg")
    var [whoseMove, setWM] = useState('w')
    
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

    // Possible moves when piece is selected
    var [possibleMoves, setPM] = useState([])

    // Current clicked square
    var [clickedSquare, setClicked] = useState(99)

    // On connect to server
    useEffect(() => {

        socket = io(ENDPOINT, connectionOptions);

        socket.on('conn', ( numOfPlayers ) => {
            console.log("conn")
            if(numOfPlayers == 1) {
                console.log("B")
                setSide('b')
            } else {
                console.log("W")
                setSide('w')
            }
        })

        socket.on('boardBack', ({board: board, whoseMove: whoseMove}) => {
            console.log("boardback")
            console.log(board)
            setBoard(board.board)
            setWM(board.whoseMove)
        })
    }, [ENDPOINT])

    //Called every render
    useEffect(() => {
        console.log("RENDER")
        if(side == 'b')
            setBR("180deg")
    }, [side])

    // Function is called when a square is clicked
    const clicked = (i, j) => {

        // If the square clicked is pink
        if(possibleMoves.includes(10*i+j)) {

            // Makes the move
            var temp = board[Math.trunc(clickedSquare/10)][clickedSquare % 10]
            board[Math.trunc(clickedSquare/10)][clickedSquare % 10] = ""
            board[i][j] = temp

            // Deslect all squares
            setClicked(99)
            setPM([])

            var whose = 'w'
            if(whoseMove == 'w') {
                whose = 'b'
            }
            socket.emit('board', {board: board, whoseMove: whose})

        } 
        
        // User clicks a non-pink square
        else if (board[i][j].charAt(0) === side && whoseMove === side) {

            // This is the list of possible squares the selected piece can jump
            var possibles = possibleSquares(board, 10*i+j)

            //We need to verify that these moves are legal
            var verifiedMoves = []

            //Let's loop through each move
            for(var it = 0; it < possibles.length; it++) {

                //We need to create a new instance of the board
                var tempBoard = []
                for(var one = 0; one < 8; one++) {
                    var arr = []
                    for(var two = 0; two < 8; two++) {
                        arr.push(board[one][two])
                    }
                    tempBoard.push(arr)
                }

                //Let's make the move
                var temp = tempBoard[i][j]
                tempBoard[i][j] = ""
                tempBoard[Math.trunc(possibles[it]/10)][possibles[it] % 10] = temp

                //Check if it is legal. If it is, add it to verifiedMoves
                if(!check(tempBoard, board[i][j].charAt(0))) {
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
            {board.map((row, i) => {
                return <Row>
                    {board[i].map((square, j) => {
                        return <Col className="nopadding" onClick={() => clicked(i, j)} >
                            <Square currentPiece={board[i][j]} 
                            side={side}
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

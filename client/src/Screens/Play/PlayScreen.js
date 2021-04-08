import React, {useState, useEffect} from 'react'
import Board from '../../Components/Board/Board'
import './PlayScreen.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'
import io from 'socket.io-client'

var connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", 
    "timeout" : 10000,                  
    "transports" : ["websocket"]
};

let socket;

const PlayScreen = () => {

    const ENDPOINT = 'localhost:5555'

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
    var [whoseMove, setWM] = useState('w')
    var [side, setSide] = useState('w')

    // Can the user move
    var [canMove, setCM] = useState(false)

    var [roomID, setRID] = useState('')

    const [gameState, setGS] = useState(1);

    // On connect to server
    useEffect(() => {

        socket = io(ENDPOINT, connectionOptions);

        socket.on('boardBack', (board) => {
            console.log("boardback")
            console.log(board)
            setBoard(board.board)
            setWM(board.whoseMove)
        })

        socket.on('gameReady', (mapOfColors) => {
            setCM(true)
            setGS(2)
            setSide(mapOfColors[socket.id])
        })

    }, [ENDPOINT])

    useEffect(() => {
        socket.emit('clientJoin', {roomID: roomID})
    }, [roomID])

    useEffect(() => {
        console.log(roomID)
        socket.emit('board', {board: board, whoseMove: whoseMove, room: roomID})
    }, [whoseMove])

    return (
        <div className="bigdiv">
            <Row>
                <div className="padding">
                    <Board canMove={canMove} board={board} setBoard={setBoard} setWM={setWM} side={side} whoseMove={whoseMove}/>
                </div>
                <div className="padding">
                    <Sidebar gameState={gameState} setGS={setGS} roomID={roomID} setRID={setRID}/>
                </div>
            </Row>
        </div>
    )
}

export default PlayScreen

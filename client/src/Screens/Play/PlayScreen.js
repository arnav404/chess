import React from 'react'
import Board from '../../Components/Board/Board'
import './PlayScreen.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'

const PlayScreen = () => {
    return (
        <div className="bigdiv">
            <Row>
                <div className="padding">
                    <Board/>
                </div>
                <div className="padding">
                    <Sidebar/>
                </div>
            </Row>
        </div>
    )
}

export default PlayScreen

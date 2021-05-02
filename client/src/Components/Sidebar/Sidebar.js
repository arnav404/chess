import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';


const Sidebar = (props) => {

    const [formValue, setFV] = useState('')
    const [formSubmitted, setFS] = useState(false)

    const handleChange = (event) => {
        setFV(event.target.value)
    }

    const handleResign = () => {
        props.setGS(5)
    }

    useEffect(() => {
        console.log("PRESSSSSED")
        props.setRID(formValue)
    }, [formSubmitted])

    useEffect(() => {
        if(props.gameState === 3) {
            props.setRID(uuidv4().substring(0,8).toUpperCase())
        }
    }, [props.gameState])


    if(props.gameState==1) {

        return (
            <div className="side">
                <div className="centered">
                    <h2 className="text">Welcome to Chessboss</h2>
                    <div className="buttondiv">
                        <button className="bigbux blue" onClick={() => {props.setGS(3)}}>Start a Game</button>
                    </div>
                    <p/>
                    <div className="buttondiv">
                        <button className="bigbux join" onClick={() => {props.setGS(4)}}>Join a Game</button>
                    </div>
                    <p/>
                    <div className="buttondiv">
                        <button disabled className="bigbux">Play Chessboss</button>
                    </div>
                </div>
            </div>
        )

    } else if (props.gameState==2) {

        return (
            <div className="side">
                <div className="centered">
                    <h2 className="text">Playing...</h2>
                    <div className="buttondiv">
                        <button onClick={() => {handleResign()}} className="bigbux cancel">Resign</button>
                    </div>
                    <p/>
                    <div className="buttondiv">
                        <button className="bigbux join">Offer a Draw</button>
                    </div>
                </div>
            </div>
        )

    } else if (props.gameState==3) {
        return (
            <div className="side">
                <div className="centered">
                    <h3 className="text">Your code is</h3>
                    <h2 className="code">{props.roomID}</h2>
                    <h4 className="instruction">Ask your friend to join the match with the code</h4>
                    <p/>
                    <div className="buttondiv">
                        <button className="bigbux cancel" onClick={() => {props.setGS(1)}}>Cancel Game</button>
                    </div>
                </div>
            </div>
        )
    } else if (props.gameState==4) {
        return (
            <div className="side">
                <div className="centered">

                    <div className="backbutton">
                        <button className="bigbux cancel" onClick={() => {props.setGS(1)}}>Back</button>
                    </div>

                    <h3 className="text">Enter code</h3>
                        <div className=" textbox form-group">
                            <input className="" value={formValue} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter code"/>
                            <small id="emailHelp" class="form-text text-muted">Enter your friend's join code.</small>
                        </div>
                        <div className="buttondiv">
                            <button onClick={() => setFS(!formSubmitted)} className="bigbux join">Join</button>
                        </div>
                    <p/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="side">
                <div className="centered">
                    <h2 className="text">{props.resignModalTitle}</h2>
                    <div className="buttondiv">
                        <button onClick={() => {props.setGS(1)}} className="bigbux blue">Continue</button>
                    </div>
                    <p/>
                </div>
            </div>
        )
    }
}

export default Sidebar

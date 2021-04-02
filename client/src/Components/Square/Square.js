import React from 'react'
import { useState, useEffect } from 'react'
import './Square.css'

// Responsible for rendering each square 
const Square = (props) => {

    // Background color and text color
    var [bgc, setBGC] = useState("brown")
    var [textColor, setTC] = useState("brown")

    // Is it clicked
    var [isClicked, setIC] = useState(false)
    var [isPM, setPM] = useState(false)

    useEffect(() => {
        setIC(props.isClicked)
        setPM(props.isPM)
    }, [props.isClicked, props.isPM])

    // Called every render
    useEffect(() => {
        // First checking if the user has clicked the square
        if(isClicked) {
            setBGC("orange")
            setTC("#F04A00")
        } else if (isPM) {
            setBGC("pink")
            setTC("#F04A00")
        } else {
            // If the square has not been clicked, it must have a dark or light color
            if((props.square%10 + parseInt(props.square/10)) % 2 == 0) {
                setBGC("blanchedalmond")
                setTC("#663300")
            } else {
                setBGC("#663300")
                setTC("blanchedalmond")
            }
        }
    }, [isClicked, isPM])

    // Return statement for the square
    return (
        <div style={{backgroundColor: bgc}} className="square">
            <h5 style={{color: textColor}} className="squareText">{props.square}</h5>
            <img className="piece" src={process.env.PUBLIC_URL+'../../Assets/Pieces/'+props.currentPiece+'.svg'} alt=""></img>
        </div>
    )
}

export default Square

//+" "+{String.fromCharCode(97 + props.square%10)+(8-parseInt(props.square/10))}
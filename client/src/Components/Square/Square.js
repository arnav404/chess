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

    useEffect(() => {
        console.log(props.isClicked)
        setIC(props.isClicked)
    }, [props.isClicked])

    // Called every render
    useEffect(() => {
        console.log(isClicked)
        // First checking if the user has clicked the square
        if(isClicked) {
            setBGC("orange")
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
    }, [isClicked])

    // Return statement for the square
    return (
        <div style={{backgroundColor: bgc}} className="square">
            <h5 style={{color: textColor}} className="squareText">{String.fromCharCode(97 + props.square%10)+(8-parseInt(props.square/10))}</h5>
        </div>
    )
}

export default Square

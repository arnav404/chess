const possibleSquares = (board, id) => {

    //The array of possible moves we want to return
    var squares = []

    //The piece that is currently selected
    var selectedPiece = board[Math.trunc(id/10)][id%10]

    //The colors
    var opposingSide = "b"
    var side = "w"
    if(selectedPiece.charAt(0) === "b") {
        opposingSide = "w"
        side = "b"
    }

    //Pawns
    if(selectedPiece.charAt(1) === 'p') {

        //Determining which side we're on
        var moveDirection = 1 * 2*(0.5-(selectedPiece.charAt(0)==='b'))

        //Moving
        try {

            if(board[Math.trunc(id/10)-moveDirection][id%10] === "") {
                squares.push(id-10*moveDirection)
                if((Math.trunc(id/10) === 6 || Math.trunc(id/10) === 1) && board[Math.trunc(id/10)-2*moveDirection][id%10] === "") {
                    squares.push(id-20*moveDirection)
                }
            } 

        } catch {
            //Promotion
            board[Math.trunc(id/10)][id%10] = side+"q"
        }

        //Capturing
        try {
            if(board[Math.trunc((id-9*moveDirection)/10)][(id-9*moveDirection)%10].charAt(0) === opposingSide) {
                squares.push(id-9*moveDirection)
            } if(board[Math.trunc((id-11*moveDirection)/10)][(id-11*moveDirection)%10].charAt(0) === opposingSide) {
                squares.push(id-11*moveDirection)
            }
        } catch {}
    }

    //Knights
    else if(selectedPiece.charAt(1) === 'n') {
        var temp = [id-20+1, id-20-1, id+10+2, id-10+2, id-10-2, id+10-2, id+20-1, id+20+1, id];
        for(const square of temp) {
            try { if(board[Math.trunc(square/10)][square%10].charAt(0) != side) {
                squares.push(square)
            }} catch {}
        }
    } 

    //Bishops, rooks, queen
    else if(selectedPiece.charAt(1) === 'r' || selectedPiece.charAt(1) === 'b' || selectedPiece.charAt(1) === 'q') {
        //These are the directions the piece can go
        var directions

        if(selectedPiece.charAt(1) === 'r')
            directions = [-10, 10, 1, -1]
        if(selectedPiece.charAt(1) === 'b')
            directions = [9, -9, 11, -11]
        if(selectedPiece.charAt(1) === 'q')
            directions = [-10, 10, 1, -1, 9, -9, 11, -11]

        //Iterating in each direction
        for(var i = 0; i < directions.length; i++) {
            var iterator = directions[i]

            //Loop runs until piece hits a piece. It goes in each direction.
            try { while(board[Math.trunc((id+iterator)/10)][(id+iterator)%10].charAt(0)!==side) {
                squares.push(id+iterator)
                if(board[Math.trunc((id+iterator)/10)][(id+iterator)%10]!=="") {
                    break;
                }
                iterator=iterator+directions[i]
            } } catch {}
        }
    }

    //King
    else if(selectedPiece.charAt(1) === 'k') {
        for(var i=id%10-1; i <= id%10+1; i++) {
            for(var j=Math.trunc(id/10)-1; j <= Math.trunc(id/10)+1; j++) {
                try {
                    if(board[j][i].charAt(0) !== side) {
                        squares.push(10*j+i)
                    }
                } catch {}
            }
        }

        if(side == 'w'){

            //Kingside
            if(id == 74 && board[7][7] == 'wr' && board[7][5] === '' && board[7][6]=='') {
                squares.push(76)
            }

            //Queenside
            if(id == 74 && board[7][0] == 'wr'  && board[7][1] === '' && board[7][2]=='' && board[7][3] =='') {
                squares.push(72)
            }

        } else {

            //Kingside
            if(id == 4 && board[0][7] == 'br' && board[0][5] === '' && board[0][6]=='') {
                squares.push(6)
            }

            //Queenside
            if(id == 4 && board[0][0] == 'br'  && board[0][1] === '' && board[0][2]=='' && board[0][3]=='') {
                squares.push(2)
            }

        }
        
        
    }

    else {}

    return squares

}

export default possibleSquares
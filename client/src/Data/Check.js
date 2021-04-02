import possibleSquares from './PossibleSquares'

const check = (board, side) => {

    var kingPos = 99

    var opposingSide = 'b'
    if(side == 'b') {
        opposingSide = 'w'
    }

    for(var i=0; i<8; i++) {
        for(var j=0; j<8; j++) {
            if(board[i][j] === side+'k') {
                kingPos = 10*i+j
            }
        }
    }

    for(var i = 0; i<8; i++) {
        for(var j=0; j<8; j++) {
            if(board[i][j].charAt(0) === opposingSide) {
                if(possibleSquares(board, 10*i+j).includes(kingPos)) {
                    return true
                }
            }
        }
    }

    return false

}

export default check
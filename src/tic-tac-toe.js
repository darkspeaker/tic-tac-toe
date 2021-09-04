class TicTacToe {
    currentUser = 'x'
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]

    winner = false

    getCurrentPlayerSymbol() {
        return this.currentUser
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameField[rowIndex][columnIndex]) return
        this.gameField[rowIndex][columnIndex] = this.currentUser
        return this.currentUser = this.currentUser == 'x' ? 'o' : 'x'
    }

    isFinished() {

    }

    getWinner() {
    }

    noMoreTurns() {
        const resExit = this.gameField.map(item => item.find(el => el === null))
        return resExit.find(item => item === null) === null ? false : true
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;

function chessBoard(a, b) {
    let board = '\n'; // we can don't using shifting
    const slash = '#';

    for(let i = 1; i <= b; i++) {
        if (i % 2) {
            for(let i = 0; i < a; i +=2) {
                board += `${slash} `;
            }
            board += '\n';
        } else if (i % 2 === 0) {
            for(let i = 0; i < a; i +=2) {
                board += ` ${slash}`;
            }
            board += '\n';
        }
    }
    return board; // we can delete last shifting with "slice(0, board.length -1)"
}
console.log(chessBoard(14, 4));
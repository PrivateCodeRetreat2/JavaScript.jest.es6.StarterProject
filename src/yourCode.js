const evolve = (board) => {
    function countNeighbours() {
        return board(1, 0) ? 3 : 0 + board(0, 1) ? 2 : 0;
    }

    return (x, y) => countNeighbours(x, y) === 3 || (board(0, 0) && countNeighbours()===2);
}


export {evolve}
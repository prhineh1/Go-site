export const initState = {
    red: { concede: false, lost: 0},
    black: { concede: false, lost: 0},
    blacksTurn: true,
    toMoveto: [[4,5]],
    selectedPiece: [5,4],
    boardState: [
                    [1, 'r', 1, 'r', 1, 'r', 1, 'r'],
                    ['r', 1, 'r', 1, 'r', 1, 'r', 1],
                    [1, 'r', 1, 'r', 1, 'r', 1, 'r'],
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    ['b', 1, 'b', 1, 'b', 1, 'b', 1],
                    [1, 'b', 1, 'b', 1, 'b', 1, 'b'],
                    ['b', 1, 'b', 1, 'b', 1, 'b', 1]
                ]
};

export const mixedBoard = [
    ['r', 1, 1, 'b', 1, 1, 'r', 1],
    [1, 1, 1, 1, 1, 'r', 1, 1],
    ['b', 1, 1, 1, 'b', 1 , 1, 'b'],
    [1, 1, 'r', 1, 1, 1, 1, 1],
    ['r', 'b', 1, 1, 1, 1, 1, 'r'],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 'r', 1, 1, 1, 'b'],
    [1, 1, 'r', 1, 1, 1, 1, 1]
];

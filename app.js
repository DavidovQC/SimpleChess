const gameBoard = document.querySelector('#gameboard');
const playerDisplay = document.querySelector('#player');
const infoDisplay = document.querySelector('#info-display');

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    rook, knight, bishop, queen, king, bishop, knight, rook,
]

function createBoard(){
   
    startPieces.forEach((startPiece, i) => {
        //Create a div for each piece on the starting board, call it "square"
        const square = document.createElement('div');
        //set the innerHTML to our svg.
        square.innerHTML = startPiece;
        //set the id to be the index
        square.setAttribute('id', i);
        //add 'square' and 'beige' to the class list of each square
        square.classList.add('square');
        square.classList.add('beige');
        //finally, add the square to our gameBoard (which is itself a div)
        gameBoard.append(square);
      
    })
    
}

createBoard();
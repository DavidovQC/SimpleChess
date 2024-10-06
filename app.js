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
   
    //start color of upper left hand side (i=0)
    var color = 'beige';
    startPieces.forEach((startPiece, i) => {
        //Create a div for each piece on the starting board, call it "square"
        const square = document.createElement('div');
        //set the innerHTML to our svg.
        square.innerHTML = startPiece;
        //set the id to be the index
        square.setAttribute('id', i);
        //add 'square' and 'beige' to the class list of each square
        square.classList.add('square');
        
        if(square.firstChild){
            square.firstChild.setAttribute('draggable', true);
        }

        if((i+1) % 8 == 0){
            square.classList.add(color);
        }

        else{
            square.classList.add(color);
            if(color == 'beige'){
                color = 'brown';
            }
            else{
                color = 'beige';
            }
        }
        //finally, add the square to our gameBoard (which is itself a div)
        gameBoard.append(square);
        if(i+1 <= 16){
            square.firstChild.firstChild.classList.add('black');
        }
        else if(49 <= i+1){
            square.firstChild.firstChild.classList.add('white');
        }
    })
}

createBoard();

const squares = document.querySelectorAll('.square');
console.log(squares);
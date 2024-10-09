// Things to look up:
// z-index 
// stop propogation
// parent node

const gameBoard = document.querySelector('#gameboard');
const playerDisplay = document.querySelector('#player');
const infoDisplay = document.querySelector('#info-display');

let player = 'white';
playerDisplay.textContent = player;

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
        square.setAttribute('square-id', i);
        //add 'square' and 'beige' to the class list of each square
        square.classList.add('square');
        //if the square has a child (which is a piece) set it to draggable.
        if(square.firstChild){
            square.firstChild.setAttribute('draggable', true);
        }
        //Each break should have the same color as the previous square
        //otherwise they should alternate
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
squares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', dragDrop);
})

let startPositionId;
let draggedElement;

function dragStart(e){
    startPositionId = e.target.parentNode.getAttribute('square-id');
    draggedElement = e.target;
}

function dragOver(e){
    e.preventDefault();
}

function dragDrop(e){
    e.stopPropagation();

    const taken = e.target.classList.contains('piece');

    if(taken){
        e.target.parentNode.append(draggedElement);
        e.target.remove();
    }

    else{
        e.target.append(draggedElement);
    }

    changePlayer();
    //e.target.remove();
    //
}


function changePlayer(){
    if(player == 'white'){
        player = 'black';
        playerDisplay.textContent = player;
        reverseIDs();
    }

    else{
        player = 'white';
        playerDisplay.textContent = player;
        revertIDs();
    }

    
}

function reverseIDs(){
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square, i) => square.setAttribute('square-id', 63-i));
}

function revertIDs(){
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square, i) => square.setAttribute('square-id', i));
}
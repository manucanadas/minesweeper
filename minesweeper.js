document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  
  cells: [
     {
      row: 0, col: 0, isMine: randomMines(), hidden: true
  }, {
      row: 0, col: 1, isMine: randomMines(), hidden: true
  }, {
      row: 0, col: 2, isMine: randomMines(), hidden: true
  }, {
      row: 0, col: 3, isMine: randomMines(), hidden: true
  }, {
      row: 1, col: 0, isMine: randomMines(), hidden: true
  }, {
      row: 1, col: 1, isMine: randomMines(), hidden: true
  }, {
      row: 1, col: 2, isMine: randomMines(), hidden: true
  }, {
      row: 1, col: 3, isMine: randomMines(), hidden: true
  }, {
      row: 2, col: 0, isMine: randomMines(), hidden: true
  }, {
      row: 2, col: 1, isMine: randomMines(), hidden: true
  }, {
      row: 2, col: 2, isMine: randomMines(), hidden: true
  }, {
      row: 2, col: 3, isMine: randomMines(), hidden: true
  }, {
      row: 3, col: 0, isMine: randomMines(), hidden: true
  }, {
      row: 3, col: 1, isMine: randomMines(), hidden: true
  }, {
      row: 3, col: 2, isMine: randomMines(), hidden: true
  }, {
      row: 3, col: 3, isMine: randomMines(), hidden: true
  }
 ]
} 



function startGame () {
  // Don't remove this function call: it makes the game work!
  for ( var i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);

    document.addEventListener('click', checkForWin);
    document.addEventListener('contextmenu', checkForWin);
  }
  lib.initBoard();
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for ( var i = 0; i < board.cells.length; i++) {
    if (board.cells.isMine === true && board.cells.isMarked === true) {
      return lib.displayMessage ("You Win!!")
      } else if (board.cells.isMine === true && board.cells.isMarked !== true) {
        return  
      } else if (board.cells.isMine !== true && board.cells.isMarked === true) {
        return  
      }
    }  
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)
  let count = 0
  
  for (var i = 0; i < surroundingCells.length; i++){
    if (surroundingCells[i].isMine === true){
      count++
    }
  }
  return count
  }

  function randomMines() {
    var num = Math.random();
    if (num < 0.4) {
      return true;
    }
  
    return false;
  }
  
  



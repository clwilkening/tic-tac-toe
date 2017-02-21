let board = (player1, player2) => {
document.querySelector('#b1').innerHTML = "";
document.querySelector('#b2').innerHTML = "";
document.querySelector('#b3').innerHTML = "";
document.querySelector('#b4').innerHTML = "";
document.querySelector('#b5').innerHTML = "";
document.querySelector('#b6').innerHTML = "";
document.querySelector('#b7').innerHTML = "";
document.querySelector('#b8').innerHTML = "";
document.querySelector('#b9').innerHTML = "";
};

let game = () => {
board();
let player1 = 'X'
let player2 = 'O'
let turn = player1
var inProgress = true;
let currentMove = function(move) {
  if (inProgress === true) {
    if (turn === player1){
      move.target.innerHTML = player1;
      turn = player2;
    }
    else {
      move.target.innerHTML = player2;
      turn = player1;
    }
    checkWin();
  };
};

let checkWin = function() {
  const winCombinations = [
    ['b1','b2','b3'],
    ['b4','b5','b6'],
    ['b7','b8','b9'],
    ['b1','b4','b7'],
    ['b2','b5','b8'],
    ['b3','b6','b9'],
    ['b1','b5','b9'],
    ['b3','b5','b7']
  ];
  for (winningIDs of winCombinations) {
    // console.log(winningIDs);
    let element1 = document.querySelector('#' + winningIDs[0]);
    let element2 = document.querySelector('#' + winningIDs[1]);
    let element3 = document.querySelector('#' + winningIDs[2]);
    // console.log(element1, element2, element3);
    if (element1.innerHTML === 'X' &&
        element2.innerHTML === 'X' &&
        element3.innerHTML === 'X') {
      alert('X wins!');
    inProgress = false;
    } else if (
      element1.innerHTML === 'O' &&
      element2.innerHTML === 'O' &&
      element3.innerHTML === 'O') {
      alert('O wins!');
    inProgress = false;
    }
  }

  console.log('checkWin');
}

document.querySelector('#b1').addEventListener('click', currentMove)
document.querySelector('#b2').addEventListener('click', currentMove)
document.querySelector('#b3').addEventListener('click', currentMove)
document.querySelector('#b4').addEventListener('click', currentMove)
document.querySelector('#b5').addEventListener('click', currentMove)
document.querySelector('#b6').addEventListener('click', currentMove)
document.querySelector('#b7').addEventListener('click', currentMove)
document.querySelector('#b8').addEventListener('click', currentMove)
document.querySelector('#b9').addEventListener('click', currentMove)
};

document.querySelector('#start').addEventListener('click', game);




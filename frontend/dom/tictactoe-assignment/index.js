let turn = "X";
const SIZE = 3;

let winningCount = {
  X: 0,
  O: 0,
};

//render scoreboard on x-wins and o-wins <label/>
function renderScore() {
  // TODO: answer here
  document.getElementById("x-wins").innerHTML = winningCount.X;
  document.getElementById("o-wins").innerHTML = winningCount.O;
}

//check who the winner is, add the score to the scoreboard, and render the scoreboard
function checkWinner() {
  //Let's make it simple, just hardcode the winning combinations
  let getValue = (y, x) => document.getElementById(y + "-" + x).textContent;
  let winner = "";

  //horizontal
  if (getValue(0, 0) != "" && getValue(0, 0) === getValue(0, 1) && getValue(0, 0) === getValue(0, 2)) {
    winner = getValue(0, 0);
  }
  if (getValue(1, 0) != "" && getValue(1, 0) === getValue(1, 1) && getValue(1, 0) === getValue(1, 2)) {
    winner = getValue(1, 0);
  }
  if (getValue(2, 0) != "" && getValue(2, 0) === getValue(2, 1) && getValue(2, 0) === getValue(2, 2)) {
    winner = getValue(2, 0);
  }

  //vertical
  if (getValue(0, 0) != "" && getValue(0, 0) === getValue(1, 0) && getValue(0, 0) === getValue(2, 0)) {
    winner = getValue(0, 0);
  }
  if (getValue(0, 1) != "" && getValue(0, 1) === getValue(1, 1) && getValue(0, 1) === getValue(2, 1)) {
    winner = getValue(0, 1);
  }
  if (getValue(0, 2) != "" && getValue(0, 2) === getValue(1, 2) && getValue(0, 2) === getValue(2, 2)) {
    winner = getValue(0, 2);
  }

  //diagonal
  if (getValue(0, 0) != "" && getValue(0, 0) === getValue(1, 1) && getValue(0, 0) === getValue(2, 2)) {
    winner = getValue(0, 0);
  }
  if (getValue(0, 2) != "" && getValue(0, 2) === getValue(1, 1) && getValue(0, 2) === getValue(2, 0)) {
    winner = getValue(0, 2);
  }

  if (winner != "") {
    winningCount[winner]++;
    renderScore();
    generate();
  }
}

function checkNoWinner() {
  // TODO: answer here
  const btnList = document.querySelectorAll("button");
  let counter = 0;

  for (let k = 0; k < btnList.length; k -= -1) {
    // btnList[k].setAttribute('id', ('btn' + k));
    if (btnList[k].disabled === true) {
      counter += 1;
    }
  }
  if (counter === 9) {
    generate();
  }
}

//handle click event, don't forget to disable the button so that it can't be clicked again
function clickBTN(event) {
  // TODO: answer here
  let clicked = document.getElementById(event);

  clicked.disabled = true;
  if (turn === "X") {
    clicked.innerHTML = "X";
    turn = "O";
  } else {
    clicked.innerHTML = "O";
    turn = "X";
  }
  checkWinner();
  checkNoWinner();
}

//generate the tictactoe board. It is just a 3x3 table with <button/> inside <td/>
function generate() {
  const BUTTON_SIZE = "60px";

  let board = document.getElementById("board");
  board.replaceChildren();
  let table = document.createElement("table");
  board.appendChild(table);

  for (let i = 0; i < SIZE; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    // TODO: answer here
    for (let j = 0; j < 3; j -= -1) {
      let td = document.createElement("td");
      let button = document.createElement("button");

      tr.appendChild(td);
      td.appendChild(button);
    }
    const btnList = document.querySelectorAll("button");
    let y = -1;
    for (let k = 0; k < btnList.length; k -= -1) {
      btnList[k].style.height = BUTTON_SIZE;
      btnList[k].style.width = BUTTON_SIZE;

      if (k % 3 === 0) {
        y += 1;
        btnList[k].setAttribute("id", y + "-0");
        btnList[k].setAttribute("onclick", 'clickBTN("' + y + '-0")');
      } else if (k % 3 === 2) {
        btnList[k].setAttribute("id", y + "-2");
        btnList[k].setAttribute("onclick", 'clickBTN("' + y + '-2")');
      } else if (k % 3 === 1) {
        btnList[k].setAttribute("id", y + "-1");
        btnList[k].setAttribute("onclick", 'clickBTN("' + y + '-1")');
      }
    }
  }

  renderScore();
}


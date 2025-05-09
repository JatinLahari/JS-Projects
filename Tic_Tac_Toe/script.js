let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msgBox = document.querySelector(".msg-box");  
let winmsg = document.getElementById("winMsg");
let playerO = document.getElementById("left");
let playerX = document.getElementById("right");
let Otrue = true;
let player1;
let player2;
let one = true;
// function names(){
  if(one){
    (function (){
      player1 = prompt("Enter Player one name:");
      player2 = prompt("Enter Player two name:");
      playerO.innerText = player1;
      playerX.innerText = player2;
    })();
  }
// }
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


if(one){
  (function(){
    playerO.innerText = player1+"\nYour Turn";
  })();
  one = false;
}
const turns = () => {
  if(Otrue){
    playerO.innerText = player1+"\nYour Turn";
  }
  else{
    playerX.innerText = player2+"\nYour Turn";
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () =>{
    if(Otrue){ // Player O's turn 
      box.innerText = "O";
      Otrue = false; // by this the X will get the chance
      box.style.color = "green";
      turns();
      playerO.innerText = player1;
      box.disabled = true;
    }else{
      box.innerText = "X";
      Otrue = true; // again O will get the chance
      box.style.color = "red";
      turns();
      playerX.innerText = player2;
      box.disabled = true;
    }
    checkWinner();
  }); 
});

const theWinner = () => {
  if(Otrue){
    playerO.innerText = player1+"\nSorry!!!";
    playerX.innerText = player2+"\nYou Won🎉"
    winmsg.innerText = `Congratulations🎉 Winner is ${player2}`;
  }else{
    playerX.innerText = player2+"\nSorry!!!";
    playerO.innerText = player1+"\nYou Won🎉"
    winmsg.innerText = `Congratulations🎉 Winner is ${player1}`;
  }
  for(let box of boxes){
    box.disabled = true;
  }
};
const checkWinner = ()=>{
  let draw = true;
  let p1Value;
  let p2Value;
  let p3Value;
  for(let pattern of winPattern){
     p1Value = boxes[pattern[0]].innerText;
     p2Value = boxes[pattern[1]].innerText;
     p3Value = boxes[pattern[2]].innerText;

    if(p1Value !== "" && p2Value !== "" && p3Value !== ""){
       if(p1Value === p2Value && p2Value === p3Value){
        theWinner();
        draw = false;
        return;
       }
    }
  }
  if(draw){
    const allBoxes = [...boxes].every((box) => box.innerText !== "");
    if(allBoxes){
      winmsg.innerText = "Match Drawn!!!";
      playerO.innerText = player1+"\nSorry!!!";
      playerX.innerText = player2+"\nSorry!!!";
    }
  }
};
const resetBtn = ()=>{
  winmsg.innerText = "";
  Otrue = true;
  location.reload(true);
  turns();
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};
let boxes = document.querySelectorAll(".box");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
// console.log(msg)
let turnX = true;
let count =0;
const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const checkWinner= () =>{
      for (let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val=== pos2val && pos2val===pos3val){
                 showWinner(pos1val);
                return true;
            }
        }
      }
};

const showWinner = (result) => {
    msg.innerText=`Congratulations!! Winner is ${result}.`;
    msgcontainer.classList.remove("hide");
    disableboxes(); 
};

const disableboxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}

boxes.forEach((box) => {
    // console.dir(box)
      box.addEventListener("click", () =>{
        if(turnX){
            box.innerText= "X";
            turnX= false;
            box.style.color= "green";
        }
        else{
            box.innerText = "O";
            turnX=true;
            box.style.color = "orange"
        }
         box.disabled= true;
         count++;

        let isWinner= checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
      });

});

const resetGame = () =>{
    turnX = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

const gameDraw = () => {
    msg.innerText = `Game Ends in Draw!!`;
    msgcontainer.classList.remove("hide");
}
resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);
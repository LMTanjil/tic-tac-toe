let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rBtn");
let winmsg = document.querySelector("#wmsg");
let newBtn = document.querySelector("#new_btn");
let msgCon = document.querySelector(".cHid");
let gCon = document.querySelector(".gContainer");




let turnO = true;
const winPatterns=[
    [0,3,6],
    [0,1,2],
    [0,4,8],
    [2,5,8],
    [6,7,8],
    [2,4,6],
    [3,4,5],
    [1,4,7]
]


const  resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCon.classList.add("cHid"); 

}

const newGame = () => {
    turnO = true ;
    enableBoxes();
    msgCon.classList.add("cHid"); 
    resetBtn.style.display = "inline-block";

}

boxes.forEach((box) => {
   
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true; 
        }
        box.disabled = true;

        checkWinner(); 
    });
});

const disableBoxes = () => {
    for(box of boxes) {
        box.disabled = true ;
    }

}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false ;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    winmsg.innerText = `CONGRATULATION, Winner is ${winner}`;
    msgCon.classList.remove("cHid"); 
    disableBoxes();
    resetBtn.style.display = "none";


}

const checkWinner = () => {
    for( let pattern of winPatterns) {
      let posval1 = boxes[pattern[0]].innerText;  
      let posval2 = boxes[pattern[1]].innerText;  
      let posval3 = boxes[pattern[2]].innerText; 

      
      
      if(posval1 != "" && posval2 != "" && posval3 != "")
        if(posval1 === posval2 && posval2 === posval3){
            showWinner(posval1);            
        }
    }
};

newBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click",resetGame);
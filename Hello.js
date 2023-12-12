let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#Re_set_button");
let new_game_btn = document.querySelector("#New_button");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turn_o = true;  // player o
const nums = [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,4,6],
      [2,5,8],
      [3,4,6],
      [6,7,8]
];

const resetGame = () =>{
     turn_o = true;
     enableboxes();
     msg_container.classList.add("hide");
}

boxes.forEach((box) =>{
       box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn_o){
         box.innerText = "O";
         turn_o = false;
        }else{
            box.innerText = "X";
            turn_o = true;
          }
          box.disabled = true;

          checkWinner();
       });
})  ;
const enableboxes=() =>{
   for(let box of boxes){
    box.disabled = false;
    box.innerText = "";

   }
}
const disabledbutton = () =>{
  for(let box of boxes ){
    box.disabled = true;
  }
}
const showwinner = (winner) =>{
  msg.innerText = `congratulation, winner is ${winner}`;
  msg_container.classList.remove("hide");
  disabledbutton ();
}

const checkWinner = () => {
  for(let pattern of nums){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    
    if(pos1 !="" && pos2 !="" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner");
          showwinner(pos1);
          
        
        }
     
    }
           
   }
};
new_game_btn.addEventListener("click", resetGame );
reset_button.addEventListener("click",resetGame);

const buttonEl = document.querySelectorAll("button")

const resultEl = document.getElementById("results")

const scoreEl = document.getElementById("score")

let playerScoreEl = document.getElementById("user-score")
let comScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let comScore = 0;

buttonEl.forEach((mee)=>{
    mee.addEventListener("click",()=>{
     
      const result =  playRound(mee.id,comPlay());

      resultEl.textContent = result;

     
      
    });
});

function comPlay(){
    let choices = ["rock","paper","scissor"]
    let randomChoice = Math.floor((Math.random()*choices.length))
    return choices[randomChoice]
}

function playRound(playerSelection,comSelection){
    if(playerSelection===comSelection){
        return "It's a tie!!"
    }
    else if(
        (playerSelection==="rock"&&comSelection==="scissor")||
        (playerSelection==="paper"&&comSelection==="rock")||
        (playerSelection==="scissor"&&comSelection==="paper"))
        {
            playerScore++;
            playerScoreEl.textContent = playerScore;
           
      
           return "You Win!!" +  playerSelection  + "beats" + comSelection
        }
        else{
            comScore++;
            comScoreEl.textContent = comScore;
            return "You Lose!!" +  comSelection + "beats" + playerSelection
        }

}
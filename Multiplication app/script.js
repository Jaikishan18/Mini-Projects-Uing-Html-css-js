const num1 = Math.ceil(Math.random()*30)
const num2 = Math.ceil(Math.random()*30)


const question1 = document.getElementById('question')

question1.innerText = `What is ${num1} multiply by ${num2}?`

const crctans= num1*num2 


const form1 = document.getElementById('form');
const input1 = document.getElementById('input')

const score1 = document.getElementById('score')
let score =JSON.parse(localStorage.getItem("score"));

score1.innerText = `score:${score}` 


form1.addEventListener("submit",()=>{
       const userans = +input1.value
      if(userans === crctans){
        score++
        updatelocalstorage()
      }
      else{
        score--
        updatelocalstorage()
      }
})

function updatelocalstorage(){
    localStorage.setItem("score", JSON.stringify(score))
}


// function num (num1,num2){
//  return num1*num2
// }
// num(function y(num1,num2){
//   console.log("hi")
// }
// )
// y(10,20);
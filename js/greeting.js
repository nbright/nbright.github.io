const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `${username} 오늘은 어땠어?`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}




/////////////////////////////////Game//////////////////////////////////////////////////
// const frmInput = document.querySelector("#inputForm");
// const numInput = document.querySelector("#input-number");
// const numGuess = document.querySelector("#guess-number");
// const button = document.querySelector("button");
// const resDiv = document.querySelector("#resDiv");
// const result = document.querySelector("#result");
// const bfWin = document.querySelector("#bfwin");
// function onSubmitClick(event){
//     event.preventDefault();
//     var inputNumber = numInput.value;    
//     var guessNumber = numGuess.value;    
//     var randomNumber =  Math.floor(Math.random() * inputNumber);
//     let bfRes = "Lose ㅠㅠ";
//     if(randomNumber.toString() === guessNumber){
//         bfRes = "Win!!!!!!";
//     }
//     else{
//         bfRes = "Lose ㅠㅠ";
//     }

//     resDiv.classList.add(".show")
    
//     result.innerText = "You chose: "+ guessNumber + ", the machine chose: " + randomNumber + ".";
//     bfWin.innerText = "You " + bfRes;
//     console.log(guessNumber, "," , randomNumber);
// };
// function onChange(event){
//     numGuess.max = numInput.value-1;
// }
// frmInput.addEventListener("submit",onSubmitClick);
// numInput.addEventListener("change",onChange);
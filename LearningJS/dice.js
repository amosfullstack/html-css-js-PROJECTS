const myButton= document.getElementById("myButton");
const Dice= document.getElementById("Dice");
const rollingRst= document.getElementById("rollingRst");

const min= 1;
const max= 6;
let randomNum;

randomNum = Math.floor(Math.random()*6)+1;
console.log(randomNum);

myButton.onclick= function(){
    randomNum=Math.floor(Math.random()*6)+1;
    myLabel.textContent=randomNum;
}
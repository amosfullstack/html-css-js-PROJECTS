let minNum = 1;
let maxNum =100;
let answer =Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
//console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess the Number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please Enter the Valid Number`);
    }
    else if(guess<minNum||guess>maxNum){
        window.alert(`Please Enter the Valid Number`);
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert(`Too Low Try Again`);
        }
        else if(guess>answer){
            window.alert(`Too high try Again`);
        }
        else{
            window.alert(`CORRECT! the Answer was ${answer}. It took You ${attempts} attempts`);
            running = false;
        }
    }
}
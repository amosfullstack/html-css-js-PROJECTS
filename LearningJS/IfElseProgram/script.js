const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");

let age=0;

 mySubmit.onclick = function(){
    
    age = myText.value;
    age = Number(age);

 if(age>=100){
        myResult.textContent = `You are too Old to Enter this site`;
    }
else if(age<0){
        myResult.textContent = `You are Not Yet Born`;
    }
       
else if(age>=18){
        myResult.textContent = `You are Allowed to Enter this site`;
    }   
 else if(age<18){
        myResult.textContent = `You are Not Allowed to Enter this site`;
    }   

else{
    myResult.textContent = `Please Enter Your Age`;
}

}

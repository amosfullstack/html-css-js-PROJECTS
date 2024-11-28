const myAge=document.getElementById("myAge");
const myButton=document.getElementById("mySubmit");
const comment=document.getElementById("comment");
let age;

mySubmit.onclick=function(){
if(age>=18){
    age=myAge.value;
    comment.textContent=`You are old enough to enter this site`;
}
else{
    age=myAge.value;
    comment.textContent=`You must be 18+`;
}
}
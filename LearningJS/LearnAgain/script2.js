//const myDay = document.getElementById("myDay");
//const result = document.getElementById("result");

//let day;

//day = myDay.textContent;
/*let username = "Amos Samwel";
console.log(username.charAt(0));
console.log(username.charAt(7));
console.log(username.indexOf("l"));
console.log(username.length);
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.repeat(3));
console.log(username.startsWith("A"));
consolr.log(username.endsWith("l"));*/

//let phoneNumber = "0744-026-640";
//phoneNumber = phoneNumber.replaceAll("-","/");
//console.log(phoneNumber);

//let username = window.prompt(`Enter your User Name`);
//username = username.trim();
//let letter = username.charAt(0);
//letter = letter.toUpperCase();

//let extraChars = username.slice(1);
//extraChars = extraChars.toLowerCase();
//username = letter + extraChars;
//console.log(username);

const email = "amossamwel252@gmail.com";
let username = email.slice(0,10);
let letter = username.charAt(0).toUpperCase();
let extraChars = username.slice(1);
username = letter + extraChars;
console.log(username);

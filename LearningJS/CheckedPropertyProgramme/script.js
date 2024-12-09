const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT Subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You SELECTED Visa`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You SELECTED PayPal`;
    }
    else if(masterBtn.checked){
        paymentResult.textContent = `You SELECTED MasterCard`;
    }
    else{
        paymentResult.textContent = `Select Payment Type`;
    }
}
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const bttnHandler= document.querySelector("#bttn");
const message = document.querySelector("#error");
const noOfNotes = document.querySelectorAll(".no-notes");

const availableNotes = [2000, 500, 100, 50,20, 10, 5, 1];

function validateBillAndCashAmount(){
    if (billAmount.value > 0) {
      
      if (cashGiven.value >= billAmount.value) {
      
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
      } else {
          message.innerHTML="Cash given value must be greater than bill amount value";
      }
    } else {
      message.innerHTML="Bill amount must be greater than zero";
    }
  };
  
  function calculateChange(amountToBeReturned) {
   for (let i = 0; i < availableNotes.length; i++) {
      const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
     amountToBeReturned = amountToBeReturned % availableNotes[i];
  noOfNotes[i].innerText = numberOfNotes;
    }
  }
  

bttnHandler.addEventListener("click",  validateBillAndCashAmount); 
  



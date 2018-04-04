//declare variables
//object holding different ammounts of coins
const piggyBank = {
    "quarters": 20,
    "dimes": 20,
    "nickles": 5, 
    "pennies": 20
}
//variable for dollar ammount
let dollarAmount = 0;

//adds all coin values together
dollarAmount = ((piggyBank.quarters * 25) + (piggyBank.dimes * 10) + (piggyBank.nickles * 5) + (piggyBank.pennies)) / 100;
console.log(dollarAmount);
//app to convert a dollar ammount into coins
//declare variables for dollar ammount and piggy bank
let dollarAmount = 268;
const piggyBank = {
    "quarters": 0,
    "dimes": 0,
    "nickles": 0,
    "pennies": 0
}

//if there is more than 0 cents do this 
while (dollarAmount > 0) {
    //if there is enough left to take a quarter take away 25 cents and add one quarter
    if (dollarAmount >= 25) {
        piggyBank.quarters += 1;
        dollarAmount -= 25;
    //if there is enough for a dime take away 10 cents and add one dime    
    } else if (dollarAmount >= 10 && dollarAmount < 25) {
        piggyBank.dimes += 1;
        dollarAmount -= 10;

    //if there is enough for a nickle take away 5 cents and add a nickle    
    } else if (dollarAmount >= 05 && dollarAmount < 10) {
        piggyBank.nickles += 1;
        dollarAmount -= 05;

    //if there is only enough for pennies take 1 cent away and add a penny    
    } else if (dollarAmount >= 01 && dollarAmount < 5) {
        piggyBank.pennies += 1;
        dollarAmount -= 01;
    }
}

console.log(piggyBank);
console.log(dollarAmount);

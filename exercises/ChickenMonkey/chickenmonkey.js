//chicken monkey exercise print out numbers with conditionals

//function for outputting things to the DOM
function output(message) {
    const div = document.getElementById("output");
    div.innerHTML += message;
    //console.log(message);
}

//start iterating through numbers
for (let i = 1; i <= 100; i++) {
    //if current iteration is divisible by 5 and 7 output chickenmonkey
    if (i % 5 === 0 && i % 7 === 0) {
        output("ChickenMonkey ");
      //if i is divisible by 5 output chicken  
    } else if (i % 5 === 0) {
        output("Chicken ");
      //if i is divisible by 7 output monkey  
    } else if (i % 7 === 0) {
        output("Monkey ");
      //if i is not divisble by 5 or 7 output the number  
    } else {
        output(i + " ");
    }
}
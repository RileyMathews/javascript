//chicken monkey exercise print out numbers with conditionals

//function for outputting things to the DOM
function output(message) {
    const div = document.getElementById("output");
    div.innerHTML += message;
    //console.log(message);
}

for (let i = 1; i <= 100; i++) {
    const thisNumber = i;
    if (thisNumber % 5 === 0 && thisNumber % 7 === 0) {
        output("ChickenMonkey ");
    } else if (thisNumber % 5 === 0) {
        output("Chicken ");
    } else if (thisNumber % 7 === 0) {
        output("Monkey ");
    } else {
        output(i + " ");
    }
}
//app to take band names, assign them a number, and incriment the global total bands number
let totalBands = 0;

//function for outputting things to the DOM
function output(message) {
    const div = document.getElementById("output");
    div.innerHTML += message;
    //console.log(message);
}

function addBand(bandName) {
    totalBands ++;
    return totalBands + " " + bandName;
}

const scum = addBand("Galactic Scum ");
output(scum);

const under = addBand("Underdogs ");
output(under);
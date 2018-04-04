//app to take band names, assign them a number, and incriment the global total bands number
let totalBands = 0;

//function for outputting things to the DOM
function output(message) {
    const div = document.getElementById("output");
    div.innerHTML += message;
    //console.log(message);
}

//function to add a band to the lineup and give them a number
function addBand(bandName) {
    // incriment the total number of bands in the show
    totalBands ++;
    // return a string containing the bands show order and name
    return totalBands + " " + bandName;
}

//adding bands to the roster and outputting them to console
const scum = addBand("Galactic Scum ");
output(scum);

const under = addBand("Underdogs ");
output(under);
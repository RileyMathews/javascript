// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let sentanceTwo = ["The","quick","brown","fox","jumped","over","the","lazy","dog"];


//function for outputting things to the DOM
function output(message) {
    const div = document.getElementById("output");
    div.innerHTML += message;
    //console.log(message);
}

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, addedCharacter) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += " " + theWordArray[i];
        //check to see if the counter variable is at one of every third words
        if ((i + 1) % 3 === 0) {
            for (let x = 0; x < (i + 1) / 3; x++) {
                //add an ! to the output
                buildMeUp += addedCharacter;
            }
        }
        // Print buildMeUp to the console
        output(buildMeUp);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "!")
addExcitement(sentanceTwo, "^")
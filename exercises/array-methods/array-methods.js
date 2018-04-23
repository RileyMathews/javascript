const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planets.forEach(element => {
    const paragraph = document.createElement("p")
    paragraph.textContent = `Planet: ${element}`
    planetEl.appendChild(paragraph)
});

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const capitalize = text => {
    firstLetter = text.slice(0, 1)
    restOfString = text.slice(1)
    return firstLetter.toUpperCase() + restOfString
}
const planetsCapitalized = planets.map(capitalize)
console.log(planetsCapitalized)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const planetsWithE = planets.filter(planet => {
    if (planet.includes('e'))
    return planet
})
console.log(planetsWithE)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
const sentance = words.reduce((sentance, word) => {
    sentance += ` ${word}`
    return sentance
})
console.log(sentance)
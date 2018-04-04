//app to parse and analyze scores of students

//create scores array and object to hold grade info
const scores = [82, 71, 62, 95, 55, 98, 69, 88, 78, 84, 64, 58, 87, 60]
const grades = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    f: 0,
} 

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
   //check to see what the current score is and incriment the appropiate grade
   if (scores[i] > 90) {
       grades.a += 1;
   } else if(scores[i] > 80 && scores[i] <= 90) {
       grades.b += 1;
   } else if(scores[i] > 70 && scores[i] <= 80) {
       grades.c += 1;
   } else if(scores[i] > 60 && scores[i] <= 70) {
       grades.d += 1;
   } else if(scores[i] <= 60) {
       grades.f += 1;
   }
}

//prepare to iterate through grades object
let x;
let currentGradeCount = 0;
let mostAchievedGrade = 0;
let leastAchievedGrade = 0;
let currentLowCount = 10;

//for every property in grades
for (x in grades) {
    //output how many of each grade there are
    console.log("There are",grades[x],x +"'s");
    //check to see if the last iterated grade is the most common grade
    if (currentGradeCount < grades[x]) {
        //apply the name of that grade to the variable
        mostAchievedGrade = x;
        //assign current iteration of grade to variable to be checked next loop
        currentGradeCount = grades[x];
    }
    //check to see if the last iterated grade is the least common grade
    if (currentLowCount > grades[x]) {
        //assign that grade name to variable
        leastAchievedGrade = x;
        //assign current iteration to variable to be checked against next loop
        currentLowCount = grades[x];
    }
}

//sort the grades array
scores.sort(function(a, b) {return b - a});
//grab the score that was put at the beginning of the array
console.log('The highest score was',scores[0]);
//grab the score that was put at the end of the array
console.log('The lowest score was',scores[scores.length -1]);
//print out most and least achieved grade
console.log('The most achieved grade was',mostAchievedGrade);
console.log('The least achieved grade was',leastAchievedGrade);
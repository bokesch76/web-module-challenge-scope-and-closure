// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    ***In counter1 the let count = 0 variable is inside the function so it can only be read inside of the function. In counter2 let count = 0
 *       rests outside the function or globally and therefore can be called upon outside of the function. Also with counter2 the function reaches
 *      outside of its scope to find count because it is not defined within the function. ***
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    ***Both closures would be an example of Closure. In counter1 the variable is located within the function it allows it to be accessed privately
 *     by the function. Counter2 is also an example of closure since the variable is made private within the function.***
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    ***Counter1 would be preferable if a programmer did not want the count variable to be accessible outside of the function further down
 *    in the code. Counter2 would be preferable in instances where a programmer would want the variable to be accessible anywhere in the code
 *    since it is global.***
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(min,max){

   let score = Math.floor(Math.random() * (max - min));
   return score;

}

console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function inning() {
  let score = Math.floor(Math.random() * 3);
   return score;
}
function finalScore(inning, numOfInnings){

  let runsPer = [{
    'HOME': 0,
    'AWAY': 0
  }]

  for (let i = 0; i <= numOfInnings; i++) {
    runsPer['HOME'] = inning() + numOfInnings;
    runsPer['AWAY'] = inning() + numOfInnings;
  }
  return runsPer;
}

console.table(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function inning() {
  let score = Math.floor(Math.random() * 3);
   return score;
}


function scoreboard(inning, numOfInnings) {
  let homeScores = 0;
  let awayScores = 0;

  let runsPerIn = {
    'HOME': homeScores,
    'AWAY': awayScores
  }
  for (let i = 1; i <= numOfInnings; i++) {
    runsPerIn.HOME = runsPerIn.HOME += inning();
    runsPerIn.AWAY = runsPerIn.AWAY += inning();
    console.log(runsPerIn);
      }
      return runsPerIn
}

console.log(scoreboard(inning,9))
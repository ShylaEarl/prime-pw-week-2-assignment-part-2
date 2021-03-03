// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//We declared a variable called name and set its value to the string Dane.
//Then we used an if else conditional to check to see if the value of the variable name is equal to, or the same as, the string Mary.
//The console will log How do you do? since Mary is not equal to the value of the variable name which is Dane.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declared a variable called secret and set it's value as undefined. We also declared a variable called code and set its value to the integer 123.
//Next we ran an if statement to check if the variable code is equal to 123.
//Since this statement is true the value of the variable secret is changed to the string super and the value of the variable code is multiplied by 2 making the new value of the variable code equal 246.
//Next we run a second if statement which checks to see if the variable code is greater than 250. It is not, so the value of the variable secret remains super rather than being changed to duper.
//The console will log the value of the variable secret which is super.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We declared a variable called isStudent and set its value to the boolean true. We also created a variable called age and set its value to the integer 34.
//   Additionally, we declared a third variable named zip and set its value to the integer 55407 (we are in my old neighborhood!)
//Next we use an if else if else chain to check to see if the value of the variable isStudent is true and if the value of the variable zip is greater than 80000.
//  Only one argument in the and (&&) compound conitional is true so the log does not run and we move onto the first else if statement to check if it is true.
//  Both statements in the first else if statement are false so the log does not run and we move onto the second else if statement. The second else if statement is true!
//The console will log Welcome to Prime! because the second else if statement is correct that the value of the variable isStudent is the boolean true.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - the value for colorOne should be set to 'blue' and the value for colorTwo should be set to 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
//FIX - the variable colorTwo should be on this line with its value set to purple
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX - while technically const is a variable type, if we want time to be truely variable, const should be let so that we can change, or vary, the value of time rather than its value remaining constant at 4.
const time = 4;

//FIX - we should use the operator && rather than || to check if both statements are true.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- they are, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//Fix - the operator should be > rather than <= OR we could rewrite this statement as age < minAge
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

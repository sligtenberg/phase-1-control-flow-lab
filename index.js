/*
function scuberGreetingForFeet(distance){
  // Write your code here!
  let result;
  if (distance <= 400) {
    result = 'This one is on me!';
  }
  else if (distance <= 2000) {
    result = 'That will be twenty bucks.';
  }
  else if (distance <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  }
  else result = 'No can do.';
  return result;
}
*/

// experiment - looks like it works to have return statements within if else expressions
function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!';
  }
  else if (distance <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else return 'No can do.';
}

// original code
// function ternaryCheckCity(city) {
//   let result;
//   city === 'NYC' ? result = 'Ok, sounds good.' : result = 'No go.';
//   return result;
// }


/*
// experiment - apparently we can't put the return statement inside a ternary expression
function ternaryCheckCity(city) {
  city === 'NYC' ? return 'Ok, sounds good.' : return 'No go.';
}
*/

// the way to do it is as follows - sleek!
// function ternaryCheckCity(city) {
//   return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
// }

// and as an arrow function:
const ternaryCheckCity = (city) => city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

/*
// original code
function switchOnCharmFromTip(tip){
  let result;
  switch (tip) {
    case 'generous' : result = 'Thank you so much.';
      break;
    case 'not as generous' : result = 'Thank you.';
      break;
    default: result = 'Bye.';
  }
  return result;
}
*/

// experiment - in this case it worked to put return statements inside the switches
function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous' : return 'Thank you so much.';
    case 'not as generous' : return 'Thank you.';
    default: return 'Bye.';
  }
}
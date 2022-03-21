/*
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insenitive.
The string can contains any char.

// Example input / output

XO("ooxx") => true
XO("xooxx") => false
XO("oooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


*/

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === "x" || letter === "X") {
      xCount++;
    } else if (letter === "o" || letter === "O") {
      oCount++;
    }
  }
  return xCount === oCount;
}
console.log(XO("oooxXm"));

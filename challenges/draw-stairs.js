/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
     for (let i = 1; i <= n; i++){
          const str = ` `.repeat(n - i) + `*`.repeat(i);
          console.log(str);
     }
};

// drawStairs(6);
/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(7) ->
\  |  /
 \ | /
  \|/ 
 --+--
  /|\ 
 / | \
/  |  \
*/

const drawStar = n => {
     if (n % 2 === 1) {
          if (n === 1) {
               console.log("*");
               return;
          } else {
               const midPoint = Math.ceil(n/2);
               const countSpace = Math.floor(n/2);
               
               for (let i = n; i >= 1; i--) {
                    let star;
                    if (i > midPoint){
                         star = " ".repeat(n - i) + "\\" + " ".repeat(i - midPoint - 1) + "|" + " ".repeat(i - midPoint - 1) + "/" + " ".repeat(n - i);
                         console.log(star);
                    } else if (i === midPoint){
                         star = "-".repeat(midPoint - 1) + "+" + "-".repeat(midPoint - 1);
                         console.log(star);
                    } else {
                         star = " ".repeat(i-1) + "/" + " ".repeat(countSpace - i) + "|" + " ".repeat(countSpace - i) + "\\" + " ".repeat(i-1);
                         console.log(star);
                    }  
               }
               return;
          }
     }
};

// drawStar(7); 
 
module.exports = { drawStairs, drawStar };

/*Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
immediately displays the result.*/
(function(num){
    const square = num*num;
    console.log(`the square of a number is : ${square}` );

}(6))
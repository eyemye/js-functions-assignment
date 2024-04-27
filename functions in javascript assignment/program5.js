/*Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
recursion. Test the function with different inputs.*/
function factorial(n){
    if(n==0)return 1;
    const result = n * factorial(n-1);
    return result;
}
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
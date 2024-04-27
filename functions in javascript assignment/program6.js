function AddTwoNumbers(a){
    return function(b){
        return a+b;
    }
}
console.log(AddTwoNumbers(5)(5));
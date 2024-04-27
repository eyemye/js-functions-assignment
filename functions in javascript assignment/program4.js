function calculateTax(income) {
    if (income <= 10000) {
        return income * 0.1; // 10% tax for income up to 10,000
    } else if (income <= 50000) {
        return 1000 + (income - 10000) * 0.2; // 20% tax for income between 10,001 and 50,000
    } else {
        return 9000 + (income - 50000) * 0.3; // 30% tax for income above 50,000
    }
}

// Test the function with various incomes
console.log("Tax for income 5000:", calculateTax(5000));
console.log("Tax for income 15000:", calculateTax(15000));
console.log("Tax for income 60000:", calculateTax(60000));

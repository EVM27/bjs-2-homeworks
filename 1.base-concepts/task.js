"use strict"
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
      return [];
  }
  
  if (discriminant === 0) {
      let root = -b / (2 * a);
      return [root];
  }
  
  if (discriminant > 0) {
      let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
  }
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 100) / 12;
    
    let loanBody = amount - contribution;
    
    if (loanBody <= 0) {
        return 0;
    }
    
    let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
    
    let totalAmount = monthlyPayment * countMonths;
    
    totalAmount = Number(totalAmount.toFixed(2));
    
    return totalAmount;
}
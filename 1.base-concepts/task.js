"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	const d = b ** 2 - 4 * a * c;
	if (d === 0) {
		arr.push(-b / (2 * a));
	}
	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = (percent / 100) / 12;
	let bodyCredit = amount - contribution;
  	let monthlyPayment;
    monthlyPayment = bodyCredit * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
    let totalPayment = monthlyPayment * countMonths;
	return Number(totalPayment.toFixed(2));
}
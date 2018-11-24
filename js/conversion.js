const toBinary = (decimal) => {
	return decimal.toString(2)
}

const toDecimal = (binary) => {
	return parseInt(binary, 2)
}

console.log(toBinary(10))
console.log(toBinary(11))
console.log(toBinary(12))
console.log(toDecimal(1))
console.log(toDecimal(10))
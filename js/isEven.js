const isEven = (num) => {
	return !(num & 1)
}

console.log(isEven(2))
console.log(isEven(128))
console.log(isEven(127))
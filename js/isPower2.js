const isPower2 = (num) => {
	return !(num & (num - 1))
}

console.log(isPower2(2))
console.log(isPower2(128))
console.log(isPower2(127))
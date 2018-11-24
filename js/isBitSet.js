const isBitset = (x, position) => {
	let shifted = x >> position
	return (shifted & 1) === 0 ? false : true
}

console.log(isBitset(5, 0))
console.log(isBitset(2, 0))
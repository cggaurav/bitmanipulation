const getBit = (num, position) => {
	let mask = 1 << position
    return (((num & mask) >> position) === 0) ? 0 : 1
}

console.log(getBit(5, 0))
console.log(getBit(5, 1))
console.log(getBit(5, 2))
console.log(getBit(5, 3))
console.log(getBit(5, 4))
console.log(getBit(5, 6))
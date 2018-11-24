const flipBit = (num, position) => {
	let mask = 1 << position
  	// If the current state of the bit is 0, XOR will return 1
  	// If the bit is 1, XOR will set it to 0
  	return num ^ mask
}

console.log(flipBit(6, 2))
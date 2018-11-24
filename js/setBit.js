const setBit = (num, position) => {
	let mask = 1 << position
	return num | mask
}
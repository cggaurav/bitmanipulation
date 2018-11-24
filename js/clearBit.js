const clearBit = (num, position) => {
	// We use the ~/NOT operator after placing the bit
	// We want 1s everywhere and 0 only where we want to modify
	let mask = ~(1 << position)
  
  	// We use AND which will modify only the bits compared to 0
  	return num & mask
}

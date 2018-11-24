def set_bit(x, position):
	mask = 1 << position
	return x | position

print set_bit(00000110, 3)
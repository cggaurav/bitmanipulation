def clear_bit(x, position):
	mask = ~(1 << position)
	return x & mask


print clear_bit(21, 2)
print int(00010001)
# 00010101, 2 => 00010001
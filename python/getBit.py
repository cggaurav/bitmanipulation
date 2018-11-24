def getBit(num, position):
	mask = 1 << position
    return ((num & mask) >> position)

print getBit(5, 0)
print getBit(5, 1)
print getBit(5, 2)
print getBit(5, 3)
print getBit(5, 4)
print getBit(5, 6)
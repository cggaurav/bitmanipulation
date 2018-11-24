def isBitSet(x, position):
	shifted = x >> position
	return True if shifted & 1 else False

print isBitSet(5, 0)
print isBitSet(2, 0)
def isPower2 (x): 
	return True if x & (x-1) == 0 else False

print isPower2(3)
print isPower2(4)
def to_binary(decimal):
	return bin(decimal)[2:]

def to_decimal(binary):
	return int("%s" % binary, 2)

print to_binary(2)
print to_decimal('0b00000110')
## Bit Manipulation 101 class

* Test kth bit is set: num & (1 << k) != 0.
* Set kth bit: num |= (1 << k).
* Turn off kth bit: num &= ~(1 << k).
* Toggle the kth bit: num ^= (1 << k).
* To check if a number is a power of 2, num & num - 1 == 0
* To check if odd, num & 1
* Multiplication by 2. x <<= 1

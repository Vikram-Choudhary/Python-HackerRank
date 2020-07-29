#!/bin/python3

import sys


def getSum(n):
    k1 = (n-1)//3
    k2 = (n-1)//5
    k3 = (n-1)//15
    return int(int(3*(k1*(k1+1))+5*(k2*(k2+1))-15*(k3*(k3+1)) >> 1))


t = int(input().strip())

for a0 in range(t):
    n = int(input().strip())
    print(getSum(n))

# Input Format

# First line contains "T" that denotes the number of test cases. This is followed by "T" lines, each containing an integer,"N" .
# Output Format

# For each test case, print an integer that denotes the sum of all the multiples of  or  below .

# Sample Input 0
# 2
# 10
# 100

# Sample Output 0
# 23
# 2318

# Explanation 0
# For N=10, if we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23.

# Similarly for N=100, we get 2318.

import math
import os
import random
import re
import sys


def maxOfHourGlass(arr):
    result = 0
    sumOfHourGlass = 0
    for i in range(0, 4):
        for j in range(0, 4):
            sumOfHourGlass = sum(arr[i][j:j+3]) + \
                sum(arr[i+2][j:j+3])+arr[i+1][j+1]
            if(sumOfHourGlass > result or (i == 0 and j == 0)):
                result = sumOfHourGlass
    return result


if __name__ == '__main__':
    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))
print(maxOfHourGlass(arr))

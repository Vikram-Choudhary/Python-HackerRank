
import math
import os
import random
import re
import sys


if __name__ == '__main__':
    n = int(input())
    counter = 0
    while n:
        n &= n << 1
        counter += 1
    print(counter)

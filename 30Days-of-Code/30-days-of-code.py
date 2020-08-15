# Day 0: Hello, World.

input_string = input()
print('Hello, World. \n'+input_string)


# Day 1: Data Types

# Declare second integer, double, and String variables.
x = int(input())
y = float(input())
z = input()
# Read and save an integer, double, and String to your variables.

# Print the sum of both integer variables on a new line.
print(i+x)
print(d+y)
print(s+z)
# Print the sum of the double variables on a new line.


# Day 2: Operators


# Complete the solve function below.

def solve(meal_cost, tip_percent, tax_percent):
    tip = meal_cost*tip_percent*0.01
    tax = meal_cost*tax_percent*0.01
    return round(meal_cost+tip+tax)


if __name__ == '__main__':
    meal_cost = float(input())

    tip_percent = int(input())

    tax_percent = int(input())

    print(solve(meal_cost, tip_percent, tax_percent))


# Day 3: Intro to Conditional Statements


if __name__ == '__main__':
    N = int(input())
    if(N % 2 == 1 or (N > 5 and N < 21)):
        print("Weird")
    else:
        print("Not Weird")

# Day 4: Class vs. Instance


class Person:
    def __init__(self, initialAge):
        if(initialAge < 0):
            self.age = 0
            print("Age is not valid, setting age to 0.")
        else:
            self.age = initialAge

    def amIOld(self):
        if(self.age < 13):
            print("You are young.")
        elif(self.age < 18 and self.age >= 13):
            print("You are a teenager.")
        else:
            print("You are old.")

    def yearPasses(self):
        self.age += 1


# Day 5: Loops


if __name__ == '__main__':
    n = int(input())
    for i in range(1, 11):
        print(format("{} x {} = {}").format(n, i, n*i))


# Day 6: Let's Review

for i in range(int(input())):
    s = input()
    print(s[0::2], s[1::2])


# Day 7: Arrays


if __name__ == '__main__':
    n = int(input())

    arr = list(map(int, input().rstrip().split()))
    result = " ".join(map(str, arr[::-1]))
    print(result)


# Day 8: Dictionaries and Maps

n = int(input())
names_numbers = [input().split() for _ in range(n)]
dictNames = {k: v for k, v in names_numbers}
while True:
    try:
        name = input()
        if name in dictNames:
            print("%s=%s" % (name, dictNames[name]))
        else:
            print("Not found")
    except:
        break


# Day 9: Recursion 3


# Complete the factorial function below.

def factorial(n):
    if(n == 0):
        return 1
    return n * factorial(n-1)


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    result = factorial(n)

    fptr.write(str(result) + '\n')

    fptr.close()


# Day 10: Binary Numbers


if __name__ == '__main__':
    n = int(input())
    counter = 0
    while n:
        n &= n << 1
        counter += 1
    print(counter)


# Day 11: 2D Arrays


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


# Day 12: Inheritance

class Student(Person):
    #   Class Constructor
    def __init__(self, firstName, lastName, idNumber, scores):
        self.firstName = firstName
        self.lastName = lastName
        self.idNumber = idNumber
        self.scores = scores

    def calculate(self):
        avgScore = round(sum(self.scores)/len(self.scores))
        if(90 <= avgScore <= 100):
            return"O"
        elif(80 <= avgScore < 90):
            return"E"
        elif(70 <= avgScore < 80):
            return"A"
        elif(55 <= avgScore < 70):
            return"P"
        elif(40 <= avgScore < 55):
            return"D"
        else:
            return"T"


# Day 13: Abstract Classes

# Write MyBook class
class MyBook():
    def __init__(self, title, author, price):
        super().__init__()
        self.price = price

    def display(self):
        print("Title: "+title)
        print("Author: "+author)
        print("Price: "+str(price))


# Day 14: Scope

class Difference:
    def __init__(self, a):
        self.__elements = a

        # Add your code here
    def computeDifference(self):
        self.maximumDifference = max(self.__elements)-min(self.__elements)
# End of Difference class


_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)


# Day 15: Linked List

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Solution:
    def display(self, head):
        current = head
        while current:
            print(current.data, end=' ')
            current = current.next

    def insert(self, head, data):
        newNode = Node(data)
        if head is None:
            return newNode
        temp = head
        while temp.next:
            temp = temp.next
        temp.next = newNode
        return head
    # Complete this method


mylist = Solution()
T = int(input())
head = None
for i in range(T):
    data = int(input())
    head = mylist.insert(head, data)
mylist.display(head)


# Day 16: Exceptions - String to Integer


S = input().strip()

try:
    print(int(S))
except:
    print("Bad String")


# Day 17: More Exceptions

class Calculator:
    def power(self, n, m):
        self.n = n
        self.m = m
        if(n < 0 or m < 0):
            raise Exception("n and p should be non-negative")
        else:
            return n**m


myCalculator = Calculator()
T = int(input())
for i in range(T):
    n, p = map(int, input().split())
    try:
        ans = myCalculator.power(n, p)
        print(ans)
    except Exception as e:
        print(e)


# Day 18: Queues and Stacks

class Solution:
    def __init__(self):
        self.stack = list()
        self.queue = list()

    def pushCharacter(self, char):
        self.stack.append(char)

    def popCharacter(self):
        return self.stack.pop(-1)

    def enqueueCharacter(self, char):
        self.queue.append(char)

    def dequeueCharacter(self):
        return self.queue.pop(0)


# Day 19: Interfaces

class AdvancedArithmetic(object):
    def divisorSum(n):
        raise NotImplementedError


class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        fact = []
        for i in range(1, n+1):
            if n % i == 0:
                fact.append(i)
        return sum(fact)


n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)


# Day 20: Sorting

def sortArr(arr):
    count_swap = 0
    while True:
        for i in range(n-1):
            if arr[i+1] < arr[i]:
                count_swap += 1
                arr[i+1], a[i] = a[i], a[i+1]
                break
        else:
            break
    return [count_swap, arr]


n = int(input().strip())
a = list(map(int, input().strip().split(' ')))
result = sortArr(a)
print("Array is sorted in", result[0], "swaps.")
print("First Element:", result[1][0])
print("Last Element:", result[1][-1])


# Day 21: Generics

/**
*    Method Name: printArray
*    Print each element of the generic array on a new line. Do not return anything.
*    @ param A generic array
**/

// Write your code here
public static < E > void printArray(E[] generic){
    for(E element: generic){
        System.out.println(element);}
}


# Day 22: Binary Search Trees

def getHeight(self, root):
    # Write your code here
    if root is None:
        return -1
    else:
        return 1 + max(self.getHeight(root.left), self.getHeight(root.right))


# Day 23:

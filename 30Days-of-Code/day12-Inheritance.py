class Person:
    def __init__(self, firstName, lastName, idNumber):
        self.firstName = firstName
        self.lastName = lastName
        self.idNumber = idNumber

    def printPerson(self):
        print("Name:", self.lastName + ",", self.firstName)
        print("ID:", self.idNumber)


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


line = input().split()
firstName = line[0]
lastName = line[1]
idNum = line[2]
numScores = int(input())  # not needed for Python
scores = list(map(int, input().split()))
s = Student(firstName, lastName, idNum, scores)
s.printPerson()
print("Grade:", s.calculate())

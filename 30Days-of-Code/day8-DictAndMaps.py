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

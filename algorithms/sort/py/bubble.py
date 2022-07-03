# def sol(list):
#     for i in

list = [3, 2, 1, 5, 4]

for i in range(len(list) - 1):
    for j in range(len(list) - i - 1):
        if list[j] > list[j + 1]:
            temp = list[j]
            list[j] = list[j + 1]
            list[j + 1] = temp


print(list)

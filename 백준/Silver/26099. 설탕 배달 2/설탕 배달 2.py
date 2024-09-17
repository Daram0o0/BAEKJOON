N = int(input())

answer = -1
for i in range(N // 5, -1, -1):
    Y = N - 5 * i
    if Y % 3 == 0:
        answer = i + Y // 3
        break

print(answer)

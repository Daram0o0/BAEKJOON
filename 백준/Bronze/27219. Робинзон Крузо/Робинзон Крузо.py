N = int(input())
answer = ""

for i in range(1, N + 1):
    if i % 5 == 0:
        answer = answer[:-4] + "V"
    else:
        answer += "I"

print(answer)
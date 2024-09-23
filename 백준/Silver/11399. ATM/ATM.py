N = int(input())
array = sorted(list(map(int,input().split())))

time = 0
answer = 0

for i in array:
  time += i
  answer += time

print(answer)
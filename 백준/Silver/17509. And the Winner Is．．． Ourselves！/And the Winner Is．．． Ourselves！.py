arr = []

for i in range(11):
  arr.append(list(map(int,input().split())))

answer = 0
T = 0

for D,V in sorted(arr):
  T += D
  answer += T+20*V

print(answer)
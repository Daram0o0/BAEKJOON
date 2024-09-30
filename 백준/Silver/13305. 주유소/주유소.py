N = int(input())

load = list(map(int,input().split()))
oil = list(map(int,input().split()))[0:N-1]

MIN = min(oil)
answer = 0
total_load = sum(load)

for i in range(len(load)):
  if oil[i] == MIN:
    answer += MIN * total_load
    break
  else:
    answer += oil[i] * load[i]
    total_load -= load[i]

print(answer)
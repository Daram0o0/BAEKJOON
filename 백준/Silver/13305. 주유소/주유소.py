N = int(input())

road = list(map(int,input().split()))
oil = list(map(int,input().split()))[0:N-1]

answer = 0
cheap_oil = max(oil)

for i in range(len(road)):
  if cheap_oil > oil[i]:
    cheap_oil = oil[i]
  
  answer += cheap_oil * road[i]

print(answer)
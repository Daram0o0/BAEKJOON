N = int(input())

paper = [[0]*100 for _ in range(100)]
width = 0

for _ in range(N):
  x,y = map(int, input().split())
  for i in range(x-1,x+9):
    for j in range(y-1,y+9):
      if paper[i][j] == 0:
        paper[i][j] += 1
        width += 1

print(width)
N = int(input())

for _ in range(N):
  arr = list(map(int, input().split()))
  
  SUM = 0
  MAX = 0
  for i in arr:
    SUM += i
    if MAX < i:
      MAX = i
  
  SUM -= MAX
  print(MAX*MAX+SUM*SUM)
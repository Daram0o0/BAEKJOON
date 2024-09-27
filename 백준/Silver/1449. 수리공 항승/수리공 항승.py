start,end,count=0,0,0
N,L = list(map(int,input().split()))
arr = sorted(list(map(int,input().split())))

for i in arr:
  start = i - 0.5
  if i + 0.5 > end:
    end = start + L
    count += 1

print(count)
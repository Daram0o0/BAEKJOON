N = int(input())
Array = [300,60,10]
arr = []


if N%10 == 0:
  for i in Array:
      arr.append(N//i)
      N%=i
  print(" ".join(map(str,arr)))
else:
  print(-1)
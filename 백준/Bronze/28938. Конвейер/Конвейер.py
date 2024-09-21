N = int(input())
arr = list(map(int, input().split()))

answer = sum(arr)

if answer>0:
  print("Right")
elif answer<0:
  print("Left")
else:
  print("Stay")
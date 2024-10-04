arr = list(map(int,input().split()))

odd = 1
odd_count = 0
even = 1
even_count = 0

for i in arr:
  if i%2:
    odd*=i
    odd_count+=1
  else:
    even*=i
    even_count+=1

if odd_count!=0:
  print(odd)
else:
  print(even)
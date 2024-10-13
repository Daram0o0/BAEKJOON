N = int(input())
count = 0

for _ in range(N):
  str = input()
  point = 0

  for i in range(1,len(str)):
    if str[i-1] == str[i]:
      continue
    elif str[0:i].find(str[i]) != -1:
      count += 1
      break

print(N - count)
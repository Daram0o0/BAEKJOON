N = int(input())

arr = []

for _ in range(N):
  str = input()
  if str not in arr:
     arr.append(str)

arr.sort(key=lambda x: (len(x),x))

for x in arr:
    print(x)
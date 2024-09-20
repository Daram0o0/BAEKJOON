answer = 0

while True:
  coin = int(input())

  if coin == -1:
    break

  answer+=coin

print(answer)
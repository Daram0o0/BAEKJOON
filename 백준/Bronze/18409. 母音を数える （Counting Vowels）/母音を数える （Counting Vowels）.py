N = int(input())
s = input()

answer = 0

for i in s:
  if i in "aieou":
    answer+=1

print(answer)
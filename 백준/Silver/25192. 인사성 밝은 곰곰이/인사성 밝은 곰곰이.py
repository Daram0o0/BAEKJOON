N = int(input())
answer = 0
s1 = set()

for _ in range(N):
  str = input()

  if str == "ENTER":
    answer += len(s1)
    s1 = set()
  else:
    s1.add(str)

print(answer+len(s1))
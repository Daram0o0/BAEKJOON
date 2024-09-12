import sys
input = sys.stdin.readline

N = int(input().strip())
answer = 0
for _ in range(N):
  answer+=int(input().strip())

print(answer - N + 1)
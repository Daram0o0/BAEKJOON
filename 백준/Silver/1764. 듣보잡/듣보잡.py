N,M = map(int,input().split())

CANNOT_SEE = set()
CANNOT_HEAR = set()

for _ in range(N):
  CANNOT_SEE.add(input())
for _ in range(M):
  CANNOT_HEAR.add(input())

answer = set.intersection(CANNOT_HEAR,CANNOT_SEE)

print(len(answer))
for name in sorted(answer):
  print(name)
import sys
input = sys.stdin.readline

N = int(input().strip())
sizes = list(map(int, input().split()))
T,P = map(int, input().split())

shirts = 0
for size in sizes:
  shirts += ((size-1)//T+1)

print(shirts)
print(N//P, N%P)
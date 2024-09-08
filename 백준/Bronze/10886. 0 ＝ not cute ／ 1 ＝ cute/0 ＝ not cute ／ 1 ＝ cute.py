import sys
input = sys.stdin.readline

N = int(input().strip())
votes = [int(input().strip()) for _ in range(N)]

if votes.count(1) > N // 2:
    print("Junhee is cute!")
else:
    print("Junhee is not cute!")
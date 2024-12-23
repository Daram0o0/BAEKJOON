N = int(input())
prices = [int(input()) for _ in range(N)]
M = int(input())
total = sum(prices[int(input())-1] for _ in range(M))
print(total)
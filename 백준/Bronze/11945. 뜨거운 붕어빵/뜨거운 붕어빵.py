N, M = map(int, input().split())
    
pattern = []

for _ in range(N):
    row = input().strip()
    pattern.append(row)

for row in pattern:
    print(row[::-1])
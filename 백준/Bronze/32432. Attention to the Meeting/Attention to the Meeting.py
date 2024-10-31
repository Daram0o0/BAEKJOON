N = int(input()) 
K = int(input())

max_time = 1

while True:
    total_time = max_time * N + (N - 1)
    if total_time > K:
        break
    max_time += 1

print(max_time - 1)
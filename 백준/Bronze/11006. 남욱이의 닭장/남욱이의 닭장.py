T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    T = 2 * M - N 
    U = N - M 
    print(T, U)
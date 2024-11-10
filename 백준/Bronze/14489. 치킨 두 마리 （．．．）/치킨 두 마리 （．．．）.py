A, B = map(int, input().split())
N = int(input())

if N == 0:
    print(A + B)
else:
    print((A + B) - 2 * N if (A + B) // N >= 2 else A + B)

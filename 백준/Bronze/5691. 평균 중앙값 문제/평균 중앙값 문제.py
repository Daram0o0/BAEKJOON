while True:
    A, B = map(int, input().split())
    if A == 0 and B == 0:
      break
    C = 3 * min(A,B) - A - B
    print(C)
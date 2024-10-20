N,M = map(int,input().split())

A = set(list(map(int,input().split())))
B = set(list(map(int,input().split())))

answer = len(A.difference(B))+len(B.difference(A))
print(answer)
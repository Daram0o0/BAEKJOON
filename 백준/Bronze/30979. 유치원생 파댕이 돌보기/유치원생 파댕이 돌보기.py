T = int(input())
N = int(input())

A = sum(map(int,input().split()))
print("Padaeng_i Happy" if T <= A else "Padaeng_i Cry")
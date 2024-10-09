A,B,C = map(int,input().split())
N = int(input())

C += N%60
N -= N%60

if C>=60:
  B += 1
  C -= 60

B += N//60
N -= N//60 * 60

if B>=60:
  hour = B//60
  A += hour
  B -= 60*hour

A += N//360

print(A%24,B,C)
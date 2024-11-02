a,b,c = map(int,input().split())

if a == 0:
    print(c**2 - b)
if b == 0:
    print(c**2 - a)
if c == 0:
    print(int((a+b)**0.5))
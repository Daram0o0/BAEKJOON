N = int(input())

a = int(N*(1+N)/2)
b = a**2

c = 0

for i in range(N+1):
  c += i**3

print(a)
print(b)
print(c)
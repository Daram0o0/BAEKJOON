n = int(input())
p = int(input())

m = p
if n >= 5:
    m = min(m, p - 500)
if n >= 10:
    m = min(m, int(p * 0.9))
if n >= 15:
    m = min(m, p - 2000)
if n >= 20:
    m = min(m, int(p * 0.75))

print(max(0, m))
n = int(input())
s = list(map(int, input().split()))

k = s[0] if len(s) > 0 else 0
m = s[1] if len(s) > 1 else 0
e = s[2] if len(s) > 2 else 0
i = s[3] if len(s) > 3 else 0
l = s[4] if len(s) > 4 else 0

r = 0

if k > e:
    r += (k - e) * 508
else:
    r += (e - k) * 108

if m > i:
    r += (m - i) * 212
else:
    r += (i - m) * 305

if n == 5:
    r += l * 707

r *= 4763
print(r)
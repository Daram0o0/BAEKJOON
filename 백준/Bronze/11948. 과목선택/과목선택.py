a = []
for _ in range(6):
    a.append(int(input()))
print(sum(sorted(a[:4])[1:]) + max(a[4:]))
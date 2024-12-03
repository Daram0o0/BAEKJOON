A, B = map(int, input().split())

plus = A + B
minus = A - B

print(max(plus, minus))
print(min(plus, minus))
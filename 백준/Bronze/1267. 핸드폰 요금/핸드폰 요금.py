N = int(input())
times = list(map(int, input().split()))

y_cost = sum((time // 30 + 1) * 10 for time in times)
m_cost = sum((time // 60 + 1) * 15 for time in times)

if y_cost < m_cost:
    print(f"Y {y_cost}")
elif y_cost > m_cost:
    print(f"M {m_cost}")
else:
    print(f"Y M {y_cost}")
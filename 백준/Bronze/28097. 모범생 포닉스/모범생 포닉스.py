n = int(input())
time = list(map(int, input().split()))

total = sum(time) + (n-1)*8 
days = total // 24
hours = total % 24

print(days, hours)
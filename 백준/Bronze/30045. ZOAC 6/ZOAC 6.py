num = 0
for _ in range(int(input())):
  str = input()
  if "01" in str or "OI" in str:
    num = num+1

print(num)
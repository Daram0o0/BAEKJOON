N = int(input())
width = N+2

print("@"*width)
for _ in range(N):
  print("@"+N*" "+"@")
print("@"*width)
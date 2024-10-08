count = 1

while True:
  A = input()
  B = input()

  if A=="END":
    break

  if sorted(list(A)) == sorted(list(B)):
    print(f"Case {count}: same")
  else:
    print(f"Case {count}: different")

  count+=1
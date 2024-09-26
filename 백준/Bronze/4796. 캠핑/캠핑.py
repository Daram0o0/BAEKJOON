count = 0

while True:
  L,P,V=list(map(int,input().split()))
  count+=1

  if (L + P + V)==0:
    break

  turn = V//P
  remain = V - turn*P

  if remain < L:
    print(f"Case {count}: {turn*L+remain}")
  else:
    print(f"Case {count}: {turn*L+L}")
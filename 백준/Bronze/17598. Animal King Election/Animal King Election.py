lion = 0
tiger = 0

for i in range(9):
  if input()=="Lion":
    lion = lion+1
  else:
    tiger = tiger+1

print("Tiger" if lion < tiger else "Lion")
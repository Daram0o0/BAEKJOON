N = int(input())
answer = 0
list = set()

for _ in range(N):
  str1,str2 = input().split()

  if str1 == "ChongChong" or str2 == "ChongChong":
    list.add(str1)
    list.add(str2)
  elif str1 in list:
    list.add(str2)
  elif str2 in list:
    list.add(str1)

print(len(list))
def multiplyList(arr):
  result = 1
  for i in arr:
    result *=i
  return result

word = input()
length = len(word)
answer = "NO"

for i in range(length-1):
  A = list(map(int, word[0:i+1]))
  B = list(map(int,word[i+1:]))

  if multiplyList(A) == multiplyList(B):
    answer = "YES"
    break

print(answer)
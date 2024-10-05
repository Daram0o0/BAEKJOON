import sys

N = int(input())
arr = sys.stdin.read().splitlines()

for str in arr:
  reverse_str = ''.join(reversed(str))
  if str == reverse_str:
    L = len(str)
    print(L,str[L//2])
    break;
  elif reverse_str in arr:
    L = len(str)
    print(L,str[L//2])
    break;

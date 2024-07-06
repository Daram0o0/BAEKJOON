import sys

answer = []

N = int(sys.stdin.readline().strip())

for _ in range(N):
    line = sys.stdin.readline().strip()
    words = list(line.split(' '))
    # print(words)
    newWords = words[2:]+words[0:2]
    # print(newWords)
    print(' '.join(newWords))
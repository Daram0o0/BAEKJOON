length = int(input())

arr = [list(map(int, input().split())) for _ in range(length)]

arr.sort(key=lambda x: (x[1],x[0]))

count = 0
end_time = 0

for start,end in arr:
  if start >= end_time:
    count += 1
    end_time = end
    
print(count)
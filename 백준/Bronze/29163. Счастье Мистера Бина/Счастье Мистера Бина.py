n = int(input())
numbers = list(map(int, input().split())) 

even_count = sum(1 for x in numbers if x % 2 == 0)

if even_count > n - even_count:
    print("Happy")
else:
    print("Sad")
def is_even(n):
    return n % 2 == 0

n = int(input())
    
for _ in range(n):
    x = int(input())
    print(f"{x} is {'even' if is_even(x) else 'odd'}")
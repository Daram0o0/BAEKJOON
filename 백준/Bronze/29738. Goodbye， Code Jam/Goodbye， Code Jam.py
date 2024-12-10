def round(rank):
    if rank <= 25:
        return "World Finals"
    elif rank <= 1000:
        return "Round 3"
    elif rank <= 4500:
        return "Round 2"
    else:
        return "Round 1"

def solve():
    T = int(input())
    for case in range(1, T + 1):
        N = int(input())
        result = round(N)
        print(f"Case #{case}: {result}")

solve()
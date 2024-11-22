game_record = input()

a_score, b_score = 0, 0

for i in range(0, len(game_record), 2):
    player = game_record[i]
    points = int(game_record[i+1])

    if player == "A":
        a_score += points
    else:
        b_score += points

    if a_score >= 11 or b_score >= 11:
        if abs(a_score - b_score) >= 2:
            break

print("A" if a_score > b_score else "B")

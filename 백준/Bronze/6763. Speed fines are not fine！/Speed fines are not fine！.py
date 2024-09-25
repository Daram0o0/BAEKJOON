limit = int(input()) 
speed = int(input())

if speed <= limit:
    print("Congratulations, you are within the speed limit!")
else:
    excess = speed - limit
    if 1 <= excess <= 20:
        fine = 100
    elif 21 <= excess <= 30:
        fine = 270
    else:
        fine = 500
    print(f"You are speeding and your fine is ${fine}.")
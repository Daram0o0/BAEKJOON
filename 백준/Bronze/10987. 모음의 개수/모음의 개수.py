word = input()

vowels = 'aeiou'

count = sum(1 for char in word if char in vowels)

print(count)
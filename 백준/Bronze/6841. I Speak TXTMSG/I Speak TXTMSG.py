def text_to_meaning(text):
    match text:
        case "CU":
            return "see you"
        case ":-)":
            return "I’m happy"
        case ":-(":
            return "I’m unhappy"
        case ";-)":
            return "wink"
        case ":-P":
            return "stick out my tongue"
        case "(~.~)":
            return "sleepy"
        case "TA":
            return "totally awesome"
        case "CCC":
            return "Canadian Computing Competition"
        case "CUZ":
            return "because"
        case "TY":
            return "thank-you"
        case "YW":
            return "you’re welcome"
        case "TTYL":
            return "talk to you later"
        case _:
            return text

while True:
    str = input()

    if str == "TTYL":
        print("talk to you later")
        break
    
    print(text_to_meaning(str))
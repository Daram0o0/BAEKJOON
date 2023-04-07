import Foundation

while true{
    let str = readLine()!.lowercased()
    var count = 0
    if str == "#" {
        break
    }
    for i in str {
        if i == "a" || i == "e" || i == "i" || i == "o" || i == "u"{
            count += 1
        }
    }
    print(count)
}
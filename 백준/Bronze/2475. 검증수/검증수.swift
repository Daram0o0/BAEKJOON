import Foundation

func veri() {
    var sum = 0
    for i in arr {
        sum += i * i
    }
    
    return print(sum % 10)
}

let arr = Array(readLine()!.split(separator: " ").map{Int($0)!})


veri()
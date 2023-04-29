import Foundation

let num = Int(readLine()!)!
var xArr = [Int]()
var yArr = [Int]()

if num < 2 {
    print(0)
} else {
    for _ in 0..<num {
        let input = readLine()!.split(separator: " ").map{Int($0)!}
        xArr.append(input[0])
        yArr.append(input[1])
    }
    
    print((xArr.max()! - xArr.min()!) * (yArr.max()! - yArr.min()!))
}


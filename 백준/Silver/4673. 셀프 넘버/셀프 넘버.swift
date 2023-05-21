import Foundation

var selfNumX = [Int]()
var sum = 0

for i in 1...10000{
    let arr = Array(String(i)).map{Int(String($0))!}
    sum = i + arr.reduce(0,+)
    
    if sum < 10001 {
        selfNumX.append(sum)
    }
}

for i in 1...10000 {
    if !selfNumX.contains(i) {
        print(i)
    }
}
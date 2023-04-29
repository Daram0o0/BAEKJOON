import Foundation

var xArr = [Int]()
var yArr = [Int]()

for _ in 0..<3 {
    let input = readLine()!.split(separator: " ").map{Int($0)!}
    
    if let index = xArr.firstIndex(of: input[0]){
        xArr.remove(at: index)
    } else {
        xArr.append(input[0])
    }
    if let index = yArr.firstIndex(of: input[1]){
        yArr.remove(at: index)
    } else {
        yArr.append(input[1])
    }
    
}
print(xArr[0],yArr[0])

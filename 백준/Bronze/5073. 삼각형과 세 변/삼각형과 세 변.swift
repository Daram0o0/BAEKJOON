import Foundation

while true {
    let edgeArr = Array(readLine()!.split(separator: " ").map{Int($0)!})
    var sum = edgeArr.reduce(0,+)

    if sum == 0 {
        break
    }
    
    if (sum - edgeArr.max()!) > edgeArr.max()! {
        if (sum - edgeArr.max()!) / 2 == edgeArr.max()! {
            print("Equilateral")
        } else if edgeArr[0] == edgeArr[1] || edgeArr[1] == edgeArr[2] || edgeArr[2] == edgeArr[0] {
            print("Isosceles")
        } else {
            print("Scalene")
        }
    } else {
        print("Invalid")
    }
}
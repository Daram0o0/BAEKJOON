import Foundation

let N = Int(readLine()!)!
var sum = 0

for i in 1...N {
    
    let arr = Array(String(i)).map{Int(String($0))!}
    sum = i + arr.reduce(0,+)
    
    if sum == N {
        print(i)
        break
    }
}

if sum != N && sum > N{ print(0) }
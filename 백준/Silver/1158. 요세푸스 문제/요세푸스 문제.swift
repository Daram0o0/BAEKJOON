import Foundation

var input = readLine()!.split(separator: " ").map{Int(String($0))!}
var arr: [Int] = Array(1...input[0])
var k = input[1] - 1

print("<", terminator: "")

for _ in 0..<input[0] - 1 {
    print(arr.remove(at: k), terminator: ", ")
    k += input[1] - 1
    if !arr.isEmpty {
        k %= arr.count
    }
}

print(arr[0], terminator: "")
print(">")
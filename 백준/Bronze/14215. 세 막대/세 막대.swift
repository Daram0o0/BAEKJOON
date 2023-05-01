import Foundation

let edge = readLine()!.split(separator: " ").map{Int($0)!}
var max = edge.max()!
var sum = edge.reduce(0, +)

if sum - max > max {
    print(sum)
} else {
    print(2 * (sum - max) - 1)
}
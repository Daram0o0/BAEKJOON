import Foundation

let input = readLine()!.split(separator: " ").map{Float($0)!}
let x = input[0]
let y = input[1]
let w = input[2]
let h = input[3]
var min = 1000
var arr = [x, w-x, y, h-y, sqrt(pow(x, 2) + pow(y, 2)), sqrt(pow(w-x, 2) + pow(y, 2)), sqrt(pow(x, 2) + pow(h-y, 2)), sqrt(pow(w-x, 2) + pow(h-y, 2)),]
arr.sort()

print(Int(arr[0]))

import Foundation

var angleArr = [Int]()

for _ in 0..<3 {
    angleArr.append(Int(readLine()!)!)
}

let sum = angleArr.reduce(0, +)

if sum == 180 {
    if angleArr[0] == 60 && angleArr[1] == 60 && angleArr[2] == 60 {
        print("Equilateral")
    } else if angleArr[0] == angleArr[1] || angleArr[1] == angleArr[2] || angleArr[0] == angleArr[2] {
        print("Isosceles")
    } else {
        print("Scalene")
    }
} else {
    print("Error")
}

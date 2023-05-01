import Foundation

let scale = Array(readLine()!.split(separator: " ").map{Int($0)!})

if scale == [1, 2, 3, 4, 5, 6, 7, 8] {
    print("ascending")
} else if scale == [8, 7, 6, 5, 4, 3, 2, 1]{
    print("descending")
} else {
    print("mixed")
}
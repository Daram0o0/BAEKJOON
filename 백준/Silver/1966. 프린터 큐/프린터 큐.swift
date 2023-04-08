import Foundation

let T = Int(readLine()!)!
var count : Int = 0

for _ in 0..<T {
    let input = readLine()!.split(separator: " ").map{Int($0)!}
    var arr : [Int] = Array(0..<input[0])
    var level = Array(readLine()!).split(separator: " ").map{Int(String($0))!}
    var list = [Int]()
    var list2 = [Int]()
    for i in (1...9).reversed() {
        while level.contains(i) {
            let idx = level.firstIndex(of: i)!
            if idx != 0 {
                let le = level.remove(at: 0)
                let li = arr.remove(at: 0)
                level.append(le)
                arr.append(li)
            }
            else {
                let rm = level.remove(at: idx)
                let rm2 = arr.remove(at: idx)
                list.append(rm)
                list2.append(rm2)
            }
        }
    }
    print(list2.firstIndex(of: input[1])! + 1)
}
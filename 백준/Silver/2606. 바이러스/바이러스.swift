//1 -- 2 -- 3   4
//|  /         /
//| /         /
//5 -- 6     7

//4
//3
//1 2
//3 4
//2 3
import Foundation

var dict : [Int: [Int]] = [:]
let node = Int(readLine()!)!
let branch = Int(readLine()!)!

for i in 1...node {
    dict[i] = []
}

for _ in 0..<branch {
    let arr2 = readLine()!.split(separator: " ").map{Int($0)!}
    dict[arr2[0]]?.append(arr2[1])
    dict[arr2[1]]?.append(arr2[0])
}

func bfs(graph: [Int: [Int]], start: Int) -> [Int] {
    var visitedQueue = [Bool](repeating: false, count: node)
    var needVisitQueue = [start]
    var stack = [Int]()
    
    while !needVisitQueue.isEmpty {
        let nodes = needVisitQueue.removeFirst()
        stack.append(nodes)
        visitedQueue[nodes - 1] = true
        for i in dict[nodes] ?? [] {
            if visitedQueue[i - 1] == false && !needVisitQueue.contains(i) {
                needVisitQueue.append(i)
            }
        }
    }
    return stack
}

let result = bfs(graph: dict, start: 1)

print(result.count - 1)

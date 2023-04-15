import Foundation

var dict : [Int: [Int]] = [:]
let arr = readLine()!.split(separator: " ").map{Int($0)!}
let node = arr[0]
let branch = arr[1]
let start = arr[2]

for i in 1...node {
    dict[i] = []
}


for _ in 0..<branch {
    let arr2 = readLine()!.split(separator: " ").map{Int($0)!}
    dict[arr2[0]]?.append(arr2[1])
    dict[arr2[0]]?.sort() //왜 sorted 하면 안되는거지...?
    dict[arr2[1]]?.append(arr2[0])
    dict[arr2[1]]?.sort()
}

//print(dict)
func dfs(graph: [Int: [Int]], start: Int) -> [Int] {
    var visitedQueue = [Int]()
    var needVisitStack = [start]
    
    while !needVisitStack.isEmpty {
        let nodes = needVisitStack.removeLast()
        if !visitedQueue.contains(nodes) {
            visitedQueue.append(nodes)
        }
        for i in (dict[nodes] ?? []).reversed() {
            if !visitedQueue.contains(i) {
                needVisitStack.append(i)
            }
        }
    }
    return visitedQueue
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

let result1 = dfs(graph: dict, start: start)
for i in result1 {
    print(i, terminator: " ")
}
print()
let result2 = bfs(graph: dict, start: start)
for j in result2 {
    print(j, terminator: " ")
}


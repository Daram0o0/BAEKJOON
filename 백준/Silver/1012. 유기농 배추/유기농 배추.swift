import Foundation

let T = Int(readLine()!)! //testcase

let dx = [0, 0, -1, 1] //상하좌우
let dy = [1, -1, 0, 0]

for _ in 0..<T {
    let input = readLine()!.split(separator: " ").map{Int($0)!}
    let width = input[0]
    let height = input[1]
    let cabbageCount = input[2]

    var field : [[Int]] = Array(repeating: Array(repeating: 0, count: width ), count: height)
    var count = 0
    
    for _ in 0..<cabbageCount {
        let coor = readLine()!.split(separator: " ").map{Int($0)!}
        field[coor[1]][coor[0]] = 1 //y, x
    }

//    print(field)

    for y in 0..<height { //y
        for x in 0..<width { //x
            if field[y][x] == 1{
                dfs(y: y, x: x)
                count += 1
            }
        }
    }

//    print(field)
    
    func dfs(y: Int, x: Int) {
        if field[y][x] == 1{
            field[y][x] = 0
            
            for i in 0..<4 {
                let ny = y + dy[i], nx = x + dx[i]
                if ny >= 0 && ny < height && nx >= 0 && nx < width {
                    if field[ny][nx] == 1{
                        dfs(y: ny, x: nx)
                    }
                }
            }
        }
    }

    print(count)
}


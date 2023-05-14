import Foundation

let N = Int(readLine()!)! //N*N

let dx = [0, 0, -1, 1] //상하좌우
let dy = [1, -1, 0, 0]

var field = [[Int]]()
var count = 0 //단지 수 초기 세팅

for _ in 0..<N {
    field.append(Array(readLine()!).map{Int(String($0))!})
} //2차원 배열로 표기됨. 집 있는 곳 : 1 , 없는 곳 : 0

var home = 0
var homeArr = [Int]()

for y in 0..<N { //y
    for x in 0..<N { //x
        if field[y][x] == 1{ //집 있는 곳 방문시
            dfs(y: y, x: x) //y, x 값 func dfs로 전달
            count += 1 //단지 수 +1
            homeArr.append(home)
            home = 0
        }
    }
}

func dfs(y: Int, x: Int) {
    if field[y][x] == 1{ //집 있는 곳 방문 시
        field[y][x] = 0 //방문했음으로 표기(1 -> 0)
        home += 1
        for i in 0..<4 { //상하좌우 4방향 조사하기
            let ny = y + dy[i], nx = x + dx[i]
            if ny >= 0 && ny < N && nx >= 0 && nx < N {
                if field[ny][nx] == 1{ //집 있는 곳이라면
                    dfs(y: ny, x: nx) //dfs에 y, x 값 전달
                }
            }
        }
    }
}

print(count) //단지 수

homeArr.sort() //오름차순

for i in homeArr {
    print(i)
}
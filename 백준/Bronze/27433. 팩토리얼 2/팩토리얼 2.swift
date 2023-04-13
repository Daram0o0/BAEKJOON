let arr = Array(0...Int(readLine()!)!)
var fac = 1

for i in arr {
    if i == 0 {
        fac = 1
    } else {
        fac = fac * i
    }
}

print(fac)
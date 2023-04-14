func factorial(_ num: Int) -> Int {
    if num <= 1 {
        return 1
    }
    return (num * factorial(num - 1))
}

print(factorial(Int(readLine()!)!))
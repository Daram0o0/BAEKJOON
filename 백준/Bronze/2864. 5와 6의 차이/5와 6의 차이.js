let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b] = require("fs").readFileSync(filePath).toString().trim().split(" ")

console.log(MinNum(a, b) + " " + MaxNum(a, b))

function MinNum(num1, num2) {
  let five1 = ''
  let five2 = ''
  for (let i = 0; i < a.length; i++) {

    if (a.charAt(i) === '6') {
      five1 += '5'
    }
    else {
      five1 += a.charAt(i)
    }
  }
  for (let i = 0; i < b.length; i++) {

    if (b.charAt(i) === '6') {
      five2 += '5'
    }
    else {
      five2 += b.charAt(i)
    }
  }

  return (+five1) + (+five2)
}

function MaxNum(num1, num2) {
  let six1 = ''
  let six2 = ''
  for (let i = 0; i < a.length; i++) {

    if (a.charAt(i) === '5') {
      six1 += '6'
    }
    else {
      six1 += a.charAt(i)
    }
  }
  for (let i = 0; i < b.length; i++) {

    if (b.charAt(i) === '5') {
      six2 += '6'
    }
    else {
      six2 += b.charAt(i)
    }
  }

  return (+six1) + (+six2)
}


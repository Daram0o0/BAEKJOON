function solution(lines) {
    let line = new Array(200).fill(0);
    
    lines.map((v) => {
      for(let i = v[0]; i<v[1]; i++)
        line[i + 100]++;
    })
    
    return line.filter(v => v>1).length;
}
function solution(array) {
    if (array.length === 1) {
        return array[0];
    }

    let max = -1;
    let maxNum = -1;
    let countMap = {}; // 빈도수를 저장할 객체

    // 배열 내 각 원소의 빈도수를 카운트합니다.
    array.forEach((num) => {
        countMap[num] = (countMap[num] || 0) + 1;
    });

    // 빈도수가 가장 높은 값을 찾습니다.
    for (let num in countMap) {
        if (countMap[num] > max) {
            max = countMap[num];
            maxNum = parseInt(num, 10);
        } else if (countMap[num] === max) {
            maxNum = -1; // 최빈값이 여러 개인 경우
        }
    }

    return maxNum;
}

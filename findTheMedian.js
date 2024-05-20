function findMedian(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[Math.floor(arr.length / 2)]
}
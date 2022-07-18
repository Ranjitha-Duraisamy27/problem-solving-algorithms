function diagonalDifference(arr) {
    console.log(arr);
    // Write your code here
    //a[0][0] + a[1][1] + a[2][2]
    //a[0][2] + a[1][1] + a[2][0]
    let sumOfFirstDiagonal = 0;
    let sumOfSecondDiagonal = 0;
    for(let i = 0; i<arr.length; i++) {
        sumOfFirstDiagonal += arr[i][i];
        sumOfSecondDiagonal += arr[i][arr.length - i-1];
    }
    const diff = Math.abs(sumOfFirstDiagonal - sumOfSecondDiagonal);
    console.log(diff);
}
let arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9 ]];
diagonalDifference(arr);
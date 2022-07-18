function miniMaxSum(arr) {
    /**
     * sort in ascending order
     * Add first 4 digits for minimum sum
     * Add last 4 digits for max sum
     */
    const sortedArr = arr.sort((a,b) => a-b);
    const minSum = add([...sortedArr].splice(0, 4));
    const maxSum = add([...sortedArr].reverse().splice(0,4));
   console.log(minSum, maxSum);
}

function add(arr) {
    if(!arr.length) {
        return [];
    }
    return arr.reduce((acc, num) => acc + num);
}

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
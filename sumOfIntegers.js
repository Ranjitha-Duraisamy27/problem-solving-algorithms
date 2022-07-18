function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach(num => {
        sum += num;
    })
    return sum;
}

let arr = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(arr));

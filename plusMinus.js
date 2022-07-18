function plusMinus(arr) {
    // number of positive numbers
    // number of negative numbers
    // number of zeros
    let numberOfPositiveNumbers = 0;
    let numberOfNegativeNumbers = 0;
    let numberOfZeros = 0;
    arr.forEach(num => {

        if(num < 0) {
            numberOfNegativeNumbers++;
        } else if(num > 0) {
            numberOfPositiveNumbers++;
        } else {
            numberOfZeros++;
        }
    });
    const arrLength = arr.length;
    const positiveNumberRatio = (numberOfPositiveNumbers / arrLength).toFixed(6);
    const negativeNumberRatio = (numberOfNegativeNumbers / arrLength).toFixed(6);
    const zerosRatio = (numberOfZeros / arrLength).toFixed(6);
    console.log(positiveNumberRatio);
    console.log(negativeNumberRatio);
    console.log(zerosRatio);

}

let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);

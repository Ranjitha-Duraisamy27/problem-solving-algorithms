function countApplesAndOranges(s, t, a, b, apples, oranges) {
    //add arr elements to starting point
    // compare it with s and t
    //find count for apples and oranges
    let appleCount = 0;
    apples.forEach(apple => {
        let distance = a + apple;
        if(distance >= s && distance <= t) {
            appleCount++;
        }
    })
    console.log(appleCount);

    let orangeCount = 0;
    oranges.forEach(apple => {
        let distance = b + apple;
        if(distance >= s && distance <= t) {
            orangeCount++;
        }
    })
    console.log(orangeCount);
}

const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];
countApplesAndOranges(s, t, a, b, apples, oranges);
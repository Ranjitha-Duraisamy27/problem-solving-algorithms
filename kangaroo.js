function kangaroo(x1, v1, x2, v2) {
    const diffInPosition = Math.abs(x1-x2);
    const diffInVelocity = Math.abs(v1-v2);
        if(diffInPosition % diffInVelocity === 0) {
            console.log("YES");
        } else {
            console.log("NO");
        }

}

const x1 = 28;
const v1 = 8;
const x2 = 96;
const v2 = 2;
kangaroo(x1, v1, x2, v2);

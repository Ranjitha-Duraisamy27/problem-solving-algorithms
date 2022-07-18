function staircase(n) {
    for(let i = 0; i < n; i++) {
        let str = '';
        for(let j=0; j < n; j++) {
            str += (j >= n-i-1) ? '#' : ' ';
        }
        console.log(str);
    }

}

staircase(4);
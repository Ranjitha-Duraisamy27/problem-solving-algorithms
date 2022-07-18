function timeConversion(s) {
    /**
     * 12:01:00PM
     * check pm or am
     * if am = return same except 12:00
     * 12 => 00
     * 1 am => 1
     * 2 => 2
     * if pm add 12
     * 1: 13
     * 2: 14
     */
    const timeArr = s.split(':');
    let hour = timeArr[0];
    if(s.includes('AM')) {
        if(hour === '12') {
            hour = '00';
        }
    } else {
        if( hour !== '12') {
            const militaryTime = (+hour)+12;
            hour = militaryTime.toString();
        }
    }
    timeArr[0]= hour;
    console.log(timeArr.join(':').slice(0,8));

}

timeConversion('07:05:45PM');
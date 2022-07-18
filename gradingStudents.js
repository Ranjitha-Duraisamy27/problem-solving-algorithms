function gradingStudents(grades) {
    /**
     * check if it less than 40
     * if 40 return same
     * if valid, get multiple of 5
     * get difference
     * return same or multiple of 5 value at the end
     */
    const finalScores = grades.map(grade => getScore(grade));
    console.log(finalScores);

}
function getScore(grade){
    const multiples = Math.floor(grade / 5);
    const roundedScore = (multiples + 1) * 5;
    if(roundedScore < 40) {
        return grade;
    }
    return (roundedScore - grade) < 3 ? roundedScore : grade;
}

gradingStudents([73, 67, 40, 33]);

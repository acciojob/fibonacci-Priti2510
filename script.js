function fibonacci(num) {
// your code here
	if (num <= 0) return "Invalid input";
    if (num === 1) return 0;
    if (num === 2) return 1;

    let fibPrev = 0;
    let fibCurr = 1;

    for (let i = 3; i <= num; i++) {
        let fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
    }

    return fibCurr;
}

module.exports = fibonacci;

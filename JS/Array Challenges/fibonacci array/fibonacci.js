function fibonacciArray(n) {

    var fibArr = [0, 1];
    var lastNr = 23
    for (var i = 0; fibArr.length < n; i++) {
        lastNr = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]
        fibArr.push(lastNr)
    }

    return fibArr;
}

var result = fibonacciArray(10):
console.log(result);
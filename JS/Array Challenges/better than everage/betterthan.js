function betterThanAverage(arr) {
    var avg = sum / arr.lenth
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++
        }
    }



    
    return count;
}
var result = betterThanAverage([3,3,3,6]);
console.log(result); // wait for 4 to return
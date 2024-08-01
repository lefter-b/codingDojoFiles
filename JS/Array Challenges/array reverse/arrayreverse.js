function reverse(arr) {

    for (var i = 0; i <= arr.length / 2; i++) {
        temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);
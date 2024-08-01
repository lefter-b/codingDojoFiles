function createArray(num) {        
        var newArray = [];        
        for (var i = 0; i <= num; i++) {                
            newArray.push(i);        
        }        
        return newArray;        // added the return statement
    }
    var y = createArray(5);        // now y is the variable that is calling on createArray
     
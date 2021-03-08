
exports.min = function min (array) {
    let minArray;
    if ( array == null || array.length === 0 ) {
        return 0;
    } else {
        minArray = Math.min.apply ( null, array);
        return minArray;
    }
}

exports.max = function max (array) {
    let maxArray;
    if ( array == null || array.length === 0) {
        return 0;
    } else {
        let maxArray = Math.max.apply ( null, array);
        return maxArray;
    }
}

exports.avg = function avg (array) {
    let avgArray;
    let sum = 0;
    if ( array == null || array.length === 0 ) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++){
            sum +=array[i];
        }
        avgArray = sum / array.length;
        return avgArray;
    }
}

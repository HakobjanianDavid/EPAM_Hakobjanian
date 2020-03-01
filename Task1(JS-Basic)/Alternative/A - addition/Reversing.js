function reverseArray(arr) {
    if(Array.isArray(arr)) {
        let result = [];
        for(let i = arr.length - 1; i >= 0; i--) {
            result.push(arr[i]);
        }
        return result;
    } else {
        return 'Argument is not an array!';
    }
}

//Rewrite function using map();
// function reverseArray(arr){
//   return arr.map((el, i, a) => a[a.length-1-i])
// }

function reverseArrayInPlace(arr) {
    if(Array.isArray(arr)) {
        const len = arr.length;
        for(let i = len -1; i >= 0; i--) {
            arr.push(arr[i]);
        }
        arr.splice(0, len);
    } else {
        return 'Argument is not an array!';
    }
}


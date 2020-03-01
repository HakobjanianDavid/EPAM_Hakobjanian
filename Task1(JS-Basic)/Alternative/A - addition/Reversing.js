function reverseArray(a) {
    if(Array.isArray(a)) {
        let result = [];
        for(let i = a.length - 1; i >= 0; i--) {
            result.push(a[i]);
        }
        return result;
    } else {
        return 'Argument is not an array!';
    }
}

//Rewrite function using map();

// function reverseArray(a){
//   return a.map((el, i, arr) => arr[arr.length-1-i])
// }

function reverseArrayInPlace(a) {
    if(Array.isArray(a)) {
        const len = a.length;
        for(let i = len -1; i >= 0; i--) {
            a.push(a[i]);
        }
        a.splice(0, len);
    } else {
        return 'Argument is not an array!';
    }
}


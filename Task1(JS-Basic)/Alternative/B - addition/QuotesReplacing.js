function quoteReplacing(str) {
    const newStr = str.split('').map((el, ind, arr) => {
        if(el === "'" && arr[ind - 1] !== ' ' && arr[ind + 1] !== ' ' 
            && arr[ind - 1] !== undefined && arr[ind + 1] !== undefined) {
            return el;
        } else if (el === "'") {
            return '"';
        } else {
            return el;
        }
    });

    return newStr.join('');
}
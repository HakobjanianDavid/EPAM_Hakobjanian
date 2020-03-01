function makeArray(a, b, c) {
    let result = [];
    if (c === undefined) {
        if(a < b) {
            for(let i = a; i <= b; i++) {
                result.push(i);
            }
        } else {
            for(let i = b; i <= a; i++) {
                result.push(i);
            }
            result.reverse();
        }
    } else {
        if(a < b) {
            for(let i = a; i <= b; i += c) {
                result.push(i);
            }
        } else {
            for(let i = b; i <= a; i += c) {
                result.push(i);
            }
            result.reverse();
        }
    }
    return result;
}
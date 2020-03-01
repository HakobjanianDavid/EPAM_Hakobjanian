function concat(...arg) {
    const arr = arg.toString().split(',');

    return arr.filter(function(el, ind) {
        return arr.indexOf(el) === ind;
    });
}

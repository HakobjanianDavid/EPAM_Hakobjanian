function every(array, method) {
    const booleanAnswers = array.filter(el => method(el));
    return booleanAnswers.length === array.length ? true : false;
}

function some(array, method) {
    const booleanAnswers = array.filter(el => method(el));
    return booleanAnswers.length > 0 ? true : false;
}
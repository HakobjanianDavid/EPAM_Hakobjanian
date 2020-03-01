function letterCounter(str, letter){
    return some = str.toLowerCase().split('')
        .filter(m => m === letter.toLowerCase()).length;
}
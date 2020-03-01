function findNumbers(numberArray) {
    const rigthNumberRegExp = /^(\d+|\.\d+|[\+/\-]\.\d+|\d+\.|[\+/\-]\d+\.|[\+/\-]\d+|\d+\.\d+|[\+/\-]\d+\.\d+|\d+\e[\+/\-]\d+|[\+/\-]\d+\.\d+\e[\+/\-]\d+|[\+/\-]\d+\.\d+\e\d+)$/gi;

    return numberArray.match(rigthNumberRegExp) || [];
}
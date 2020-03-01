function checkEmail(email) {
    const valid = 'Email is valid';
    const invalid = 'Email is not valid';
    const dotRegExp = /\./g;
    const atComercialRegExp = /@/g;
    let result = invalid;

    const atComercial = email.split(atComercialRegExp);

    // проверяю на наличие одного "@" в email, если это так то присваиваю
    // переменной значение после знака "@", если же нет, то вывожу ошибку
    // так как либо знака "@" нет вовсе и длина массива === 1
    // либо "@" более 1 и длина массива > 2, в этом случае email не валиден
    let firstAndSecondLevelDomen = atComercial.length === 2 ? atComercial[1] : invalid;
    
    // Проверяю на наличие в домене знака точки
    let dottedDomen = dotRegExp.test(firstAndSecondLevelDomen);

    // Проверяем получившиеся результаты и присваиваем 
    // result валидный или не валидный ответ
    if(firstAndSecondLevelDomen !== invalid && dottedDomen) {
        result = dottedDomen ? valid : invalid;
    } else {
        result = invalid;
    }

    // Но если проверять только на наличие точки и знака '@'
    // может пройти и такой email: 'qwerty@ma.ilc.om'
    // для этого можно усовершенствовать регулярное выражение
    // и в конечном итоге получить что то на подобии этого

    // const compositeRegExp = /@[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.(com|edu|gov|info|net|org|ru|[a-z][a-z])/g;
    // const result = compositeRegExp.test(`@${firstAndSecondLevelDomen}`) ? valid : invalid;

    return result;
}

function checkPassword(password) {
    const invalid = 'Password is invalid';
    const valid = 'Password is valid';
    const numberAndLetterRegExp = /[^a-z0-9]/gi;
    let result = invalid;

    if ( password.length > 8 ) {
        const specSimbol = password.match(numberAndLetterRegExp) || [];

        result = specSimbol.length === 0 ? valid : invalid;
        return result;
    } else {
        return invalid
    }
}

function checkCardNumber(number) {
    number = parseInt(number);
    const rangeRegExp = /[^0-9]/g;
    
    const wrongSimbolsArray = number.toString().match(rangeRegExp) || [];
    let result = wrongSimbolsArray.length === 0 ? true : false;

    return result;
}

function checkCardDate(month, year) {
    month = parseInt(month);
    year = parseInt(year);
    const monthRegExp = /^(1|2|3|4|5|6|7|8|9|10|11|12)$/;
    const yearRegExp = /\b\d{4}\b/;

    if(yearRegExp.test(year) && monthRegExp.test(month)) {
        return true;
    } else {
        return false;
    }
}

function checkCardOwner(owner) {
    const ownerRegExp = /^[a-z]+ [a-z]+$/gi;

    return ownerRegExp.test(owner);
}

function checkCardCvvCode(code) {
    code = parseInt(code) || code;
    const codeRegExp = /^\d{3}$/g;
    return codeRegExp.test(code);
}

function checkCard(cardNumber, lastMonth, lastYear, cardOwner, cardCvvCode) {
    const checkedCardNumber = checkCardNumber(cardNumber);
    const checkedCardDate = checkCardDate(lastMonth, lastYear);
    const checkedCardOwner = checkCardOwner(cardOwner);
    const checkedCardCvvCode = checkCardCvvCode(cardCvvCode);

    if(checkedCardNumber && checkedCardDate && checkedCardOwner && checkedCardCvvCode){
        return true;
    } else {
        return false;
    }
}

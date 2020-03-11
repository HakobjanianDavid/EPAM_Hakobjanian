function checkLogin(pLogin) {
    if(!pLogin) {
        return false;
    }
    const atComercialRegExp = /@/g;
    const atComercial = pLogin.split(atComercialRegExp);
    let firstAndSecondLevelDomen = atComercial.length === 2 ? atComercial[1] : false;

    if (firstAndSecondLevelDomen) {
        const compositeRegExp = /@[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.(com|edu|gov|info|net|org|ru)/g;
        const result = compositeRegExp.test(`@${firstAndSecondLevelDomen}`) ? true : false;
        return result;
    } else {
        return firstAndSecondLevelDomen;
    }
}

function checkPassword(pPassword) {
    if(!pPassword) {
        return false;
    }
    const numberAndLetterRegExp = /[^a-z0-9]/gi;
    let result = false;

    if ( pPassword.length > 8) {
        const specSimbol = pPassword.match(numberAndLetterRegExp) || [];
        result = specSimbol.length === 0 ? true : false;
    }
    return result;
}

function checkCardNumber(number) {
    if (number.length >= 8 && number.length <= 12) {
        number = parseInt(number);
        const rangeRegExp = /[^0-9]/g;

        const wrongSimbolsArray = number.toString().match(rangeRegExp) || [];
        let result = wrongSimbolsArray.length === 0 ? true : false;

        return result;
    } else {
        return false;
    }
}

function checkCardOwner(owner) {
    const ownerRegExp = /^[a-z]+ [a-z]+$/gi;
    return ownerRegExp.test(owner);
}

function checkCardCvvCode(code) {
    code = parseInt(code);
    const codeRegExp = /^\d{3}$/g;
    return codeRegExp.test(code);
}

export { checkLogin, checkPassword, checkCardNumber, checkCardOwner, checkCardCvvCode };
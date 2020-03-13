function checkLogin(pLogin: string): boolean {
    if (!pLogin) {
        return false;
    }
    const atComercialRegExp: RegExp = /@/g;
    const atComercial: string[] = pLogin.split(atComercialRegExp);
    let firstAndSecondLevelDomen: string | boolean = atComercial.length === 2 ? atComercial[1] : false;

    if (firstAndSecondLevelDomen) {
        const compositeRegExp: RegExp = /@[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.(com|edu|gov|info|net|org|ru)/g;
        const result: boolean = compositeRegExp.test(`@${firstAndSecondLevelDomen}`) ? true : false;
        return result;
    } else {
        return false;
    }
}

function checkPassword(pPassword: string): boolean {
    if (!pPassword) {
        return false;
    }
    const numberAndLetterRegExp = /[^a-z0-9]/gi;
    let result: boolean = false;

    if (pPassword.length > 8) {
        const specSimbol: string[] = pPassword.match(numberAndLetterRegExp) || [];
        result = specSimbol.length === 0 ? true : false;
    }
    return result;
}

function checkCardNumber(cardNumber: string): boolean {
    if (cardNumber.length >= 8 && cardNumber.length <= 12) {
        const pNumber: number = parseInt(cardNumber);
        const rangeRegExp: RegExp = /[^0-9]/g;

        const wrongSimbolsArray: string[] = pNumber.toString().match(rangeRegExp) || [];
        let result: boolean = wrongSimbolsArray.length === 0 ? true : false;

        return result;
    } else {
        return false;
    }
}

function checkCardOwner(owner: string): boolean {
    const ownerRegExp: RegExp = /^[a-z]+ [a-z]+$/gi;
    return ownerRegExp.test(owner);
}

function checkCardCvvCode(code: string) {
    const codeRegExp = /^\d{3}$/g;
    return codeRegExp.test(code);
}

export { checkLogin, checkPassword, checkCardNumber, checkCardOwner, checkCardCvvCode };
import { checkEmail, checkPassword, checkCardNumber, checkCardOwner, checkCardCvvCode, passwordAndLoginChecking, numberAndOwnerCheck } from './checkFunctions';

import { mainMenuList, productsList, productsActs, cartActs, cardNumberActs, cardOwnerActs, cardCVVActs } from './constants';

import { Menu } from './mainClass';

let cartCount = 0;
let cartProd = [];

const mainMenu = new Menu('Главная страница', mainMenuList);
const products = new Menu('Товары', productsList, productsActs);
const cart = new Menu('Корзина', cartProd, cartActs);
const MenuCardNumber = new Menu('Оплата', cardNumberActs);
const MenuOwnerName = new Menu('Оплата', cardOwnerActs);
const MenuCVV = new Menu('Оплата', cardCVVActs);
const login = new Menu('Логин');
const Password = new Menu('Пароль');

function productCall() {
    const p = products.action();
    const productsCount = productsList.length;

    if (p <= productsCount || p == productsCount + 1 || p == productsCount + 2) {
        if(p <= productsCount && p !== '' && p !== null) {
            ++cartCount;
            cartProd.push(productsList[p - 1]);
            console.log(p);
            return productCall();
        }

        if (p == productsCount + 1) {
            return cartCall();
        }

        if (p == productsCount + 2) {
            return app();
        }

        if (p == '' || p === null) {
            products.print();
            return productCall();
        }
    } else {
        products.print();
        return productCall();
    }
}

function cartCall() {
    const p = cart.action();

    if (cartProd.length === 0) {
        if (p === '1' || p === '2') {
            if (p === '1') {
                return paymentCall();
            } else {
                return app();
            }
        } else {
            cart.print();
            return cartCall();
        }
    } else {
        if (p <= cartProd.length && p !== '' && p !== null) {
            cartProd.splice(p - 1, 1);
            --cartCount;
            return cartCall();
        } else {
            if(p == cartProd.length + 2 || p == cartProd.length + 1) {
                if (p == cartProd.length + 2) {
                    return app();
                }
                if (p == cartProd.length + 1) {
                    return paymentCall();
                }
            } else {
                cart.print();
                return cartCall();
            }
        }
    }
}

function cartCVVCall() {
    const cartCVV = MenuCVV.action();

    if (checkCardCvvCode(cartCVV) && cartCVV !== '2') {
        return console.log('right CVV');
    }

    if (cartCVV === '2') {
        return app();
    } else {
        return cartCVVCall();
    }
}

function cartOwnerCall() {
    const cartOwner = MenuOwnerName.action();
    return numberAndOwnerCheck(cartOwner, checkCardOwner, cartCVVCall, app, cartOwnerCall, 'Необходимо ввести имя владельца!');
}

function paymentCall() {
    const cartNumber = MenuCardNumber.action();
    return numberAndOwnerCheck(cartNumber, checkCardNumber, cartOwnerCall, app, paymentCall, 'Необходимо ввести номер карты!');
}

function app() {
    const firstCall = mainMenu.action();
    let returnedFunction = (firstCall === '1' || firstCall === '2') ? chooseFunc(firstCall) : wrongAnswer();

    function chooseFunc(a) {
        return (a === '1') ? productCall() : cartCall();
    }

    function wrongAnswer() {
        mainMenu.print();
        return app();
    }

    return returnedFunction;
}

function passwordApp() {
    const userPassword = Password.action();
    return passwordAndLoginChecking(userPassword, checkPassword, app, passwordApp, 'Необходимо ввести пароль!');
}

function loginApp() {
    const userName = login.action();
    return passwordAndLoginChecking(userName, checkEmail, passwordApp, loginApp, 'Необходимо ввести логин в формате example@example.exmp');
}
loginApp();
export { cartCount };
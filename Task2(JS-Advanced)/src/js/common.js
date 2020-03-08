import { checkEmail, checkPassword, checkCardNumber, checkCardOwner, checkCardCvvCode } from './checkFunctions';

import { mainMenuList, productsList, productsActs, cartActs, cardNumberActs, cardOwnerActs, cardCVVActs } from './constants';

import { Menu }from './mainClass';

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
    if (p <= productsCount && p !== '' && p !== null) {
        ++cartCount;
        cartProd.push(productsList[p - 1]);
        return productCall();
    }

    if (p == productsCount + 1) {
        return cartCall();
    }

    if (p == productsCount + 2) {
        return app();
    }
}

function cartCall() {
    const p = cart.action();
    const productsCount = productsList.length;

    if (cartProd.length === 0) {
        if (p === '1') {
            return paymentCall();
        } else {
            return app();
        }
    } else {
        if (p <= cartProd.length) {
            cartProd.splice(p - 1, 1);
            --cartCount;
            return cartCall();
        } else {
            if (p == cartProd.length + 2) {
                return app();
            }
            if (p == cartProd.length + 1) {
                return paymentCall();
            }
        }
    }
}

function cartCVVCall() {
    const cartCVV = MenuCVV.action();

    if(checkCardCvvCode(cartCVV) && cartCVV !== '2') {
        return console.log('right CVV');
    }

    if(cartCVV === '2') {
        return app();
    } else {
        return cartCVVCall();
    }
}

function cartOwnerCall() {
    const cartOwner = MenuOwnerName.action();

    if(checkCardOwner(cartOwner) && cartOwner !== '2') {
        return cartCVVCall();
    } 
    if(cartOwner === '2') {
        return app();
    } else {
        return cartOwnerCall();
    }
}

function paymentCall() {
    const cartNumber = MenuCardNumber.action();

    if (checkCardNumber(cartNumber) && cartNumber !== '2') {
        return cartOwnerCall();
    } 
    if(cartNumber === '2') {
        return app();
    } else {
        return paymentCall();
    }
}

function app() {
    const firstCall = mainMenu.action();

    if (firstCall === '1') {
        productCall();
    }

    if (firstCall === '2') {
        cartCall();
    }
}

function passwordApp() {
    const userPassword = Password.action();

    if(checkPassword(userPassword)) {
        return app();
    } else {
        return passwordApp();
    }
}

function loginApp() {
    const userName = login.action();

    if(checkEmail(userName)) {
        return passwordApp();
    } else {
        return loginApp();
    }
}

loginApp();

export { cartCount };
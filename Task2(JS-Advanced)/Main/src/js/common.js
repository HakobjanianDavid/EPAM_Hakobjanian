import { checkLogin, checkPassword, checkCardNumber, checkCardOwner, checkCardCvvCode } from './checkFunctions';

import { mainMenuList, productsList, productsActs, cartActs, cardNumberActs, cardOwnerActs, cardCVVActs } from './constants';

import { Menu } from './mainClass';

class Login extends Menu {
    print() {
        this.prescriptio = `Необходимо ввести логин в формате example@example.exmp`;
        return alert(this.prescriptio);
    }

    action() {
        this.list = '';
        this.prepareList();
        this.prepareActs();
        const prescriptio = this.preparePrescriptio();
        const a = prompt(prescriptio, 'qwerty@gmail.com');
        return a;
    }
}

class Password extends Menu {
    print() {
        this.prescriptio = `Необходимо ввести валидный пароль!`;
        return alert(this.prescriptio);
    }

    action() {
        this.list = '';
        this.prepareList();
        this.prepareActs();
        const prescriptio = this.preparePrescriptio();
        const a = prompt(prescriptio, '55lfk55lkgl');
        return a;
    }
}

class Owner extends Menu {
    print() {
        this.prescriptio = `Необходимо ввести имя владельца!`;
        return alert(this.prescriptio);
    }

    action() {
        this.list = '';
        this.prepareList();
        this.prepareActs();
        const prescriptio = this.preparePrescriptio();
        const a = prompt(prescriptio, 'Hakobjanian David');
        return a;
    }
}

class MenuCVV extends Menu {
    action() {
        this.list = '';
        this.prepareList();
        this.prepareActs();
        const prescriptio = this.preparePrescriptio();
        const a = prompt(prescriptio, '541');
        return a;
    }
}

class Card extends Menu {
    print() {
        this.prescriptio = `Необходимо ввести номер карты!`;
        return alert(this.prescriptio);
    }

    action() {
        this.list = '';
        this.prepareList();
        this.prepareActs();
        const prescriptio = this.preparePrescriptio();
        const a = prompt(prescriptio, '123456789');
        return a;
    }
}

class Product extends Menu {
    prepareList() {
        return this.itemsList.map((el, ind) => {
            return this.list += `${++ind}. ${el.name}\n`;
        });
    }

    prepareActs() {
        this.actions = '';
        return this.actionsList.map((el, ind) => {
            return this.actions += `${this.itemsList.length + (++ind)}. ${el.name}\n`;
        });
    }
}

class Cart extends Menu {
    prepareList() {
        return this.itemsList.map((el, ind) => {
            return this.list += `${++ind}. ${el.name}\n`;
        });
    }

    prepareActs() {
        this.actions = '';
        return this.actionsList.map((el, ind) => {
            return this.actions += `${this.itemsList.length + (++ind)}. ${el.name}\n`;
        });
    }
}

let amountItemsInBasket = 0;
let basketOfGoods = [];

const mainMenu = new Menu('Главная страница', mainMenuList);
const products = new Product('Товары', productsList, productsActs);
const cart = new Cart('Корзина', basketOfGoods, cartActs);
const menuCardNumber = new Card('Оплата', cardNumberActs);
const menuOwnerName = new Owner('Оплата', cardOwnerActs);
const menuCVV = new MenuCVV('Оплата', cardCVVActs);
const login = new Login('Логин');
const password = new Password('Пароль');

function productPage() {
    const allPossibleProductPageActions = productsList.concat(productsActs);
    const selectedAction = parseInt(products.action());
    
    if(allPossibleProductPageActions[selectedAction-1]) {
        if(allPossibleProductPageActions[selectedAction-1].typeId === 1) {
            ++amountItemsInBasket;
            basketOfGoods.push(
                {
                    name: allPossibleProductPageActions[selectedAction-1].name,
                    typeId: 1
                });
            productPage();
        } else {
            if(allPossibleProductPageActions[selectedAction-1].name === 'Корзина') {
                cartPage();
            }

            if(allPossibleProductPageActions[selectedAction-1].name === 'Вернуться на главную страницу') {
                mainPage();
            }
        }
    } else {
        products.print();
        productPage();
    }
}

function cartPage() {
    const allPossibleProductPageActions = basketOfGoods.concat(cartActs);
    const selectedAction = parseInt(cart.action());

    if(allPossibleProductPageActions[selectedAction-1]) {
        if(allPossibleProductPageActions[selectedAction-1].typeId === 1) {
            basketOfGoods.splice(selectedAction-1, 1);
            --amountItemsInBasket;
            cartPage();
        }

        if(allPossibleProductPageActions[selectedAction-1].name === 'Оплата') {
            cartNumberPage();
        }

        if(allPossibleProductPageActions[selectedAction-1].name === 'Вернуться на главную страницу') {
            mainPage();
        }
    } else {
        cart.print();
        cartPage();
    }
}

function cartCVVPage() {
    const cartCVV = menuCVV.action();

    /* Вопрос: В данной функции я проверяю CVV код карты, при этом на странице ввода два пункта: 1. Призыв к вводу CVV-кода,
                2. Возвращение на главное меню 
    Так как в ТЗ не описано как это должно реализовываться, я сделал вот как: при введении любого значения не равного "2" и прошедшего проверку на валидность - в консоль возвращается надпись о правильность ввода кода. Иначе если введена "2" - то есть второй пункт меню, то пользователя возвращяет на главное меню. Если же значение и не является валидным, и не является "2" - то приложение выкидывает ошибку и вызывает еще раз страницу ввода СVV кода.
    Далее по коду описаны еще две похожие функции, где такая же реализации только с номером и именем владельца карты. Правильно ли я сделал, или можно было как то универсальней? Я понимаю, что при добавлении какого то нового пункта меню, всё сломается, но т.к. в ТЗ не было описано подробно с учетом чего нужно реализовать код, я пока написал так. */

    if (cartCVV && cartCVV !== '2' && checkCardCvvCode(cartCVV)) {
        return console.log('right CVV');
    }

    if (cartCVV === '2') {
        return mainPage();
    } else {
        menuCVV.print();
        return cartCVVPage();
    }
}

function cartOwnerPage() {
    const cartOwner = menuOwnerName.action();

    if(checkCardOwner(cartOwner)) {
        cartCVVPage();
    } else {
        if(cartOwner === '2') {
            mainPage();
        } else {
            menuOwnerName.print();
            cartOwnerPage();
        }
    }
}

function cartNumberPage() {
    const cartNumber = menuCardNumber.action();

    if(cartNumber && checkCardNumber(cartNumber)) {
        cartOwnerPage();
    } else {
        if(cartNumber === '2') {
            mainPage();
        } else {
            menuCardNumber.print();
            cartNumberPage();
        }
    }
}

function mainPage() {
    const firstCall = mainMenu.action();

    /* Вопрос: сейчас в интерфесе приложения на главной странице 
    только два выбора (либо товары, либо корзина), из-за этого я не стал усложнять массив с действиями на главной странице (mainMenuList), как например я переделал массив с действиями на странице товаров и корзины. Ну и собственно вопрос, стоит ли его переписать, как это например сделано в productPage, или пока оставить так и двигаться дальше? */

    let returnedFunction = (firstCall === '1' || firstCall === '2') ? chooseFunc(firstCall) : wrongAnswer();

    function chooseFunc(a) {
        return (a === '1') ? productPage() : cartPage();
    }

    function wrongAnswer() {
        mainMenu.print();
        mainPage();
    }

    return returnedFunction;
}

function passwordPage() {
    const userPassword = password.action();

    if (checkPassword(userPassword)) {
        return mainPage();
    } else {
        password.print();
        return passwordPage();
    }
}

function loginPage() {
    const userName = login.action();

    if (checkLogin(userName)) {
        return passwordPage();
    } else {
        login.print();
        return loginPage();
    }
}

loginPage();
export { amountItemsInBasket };
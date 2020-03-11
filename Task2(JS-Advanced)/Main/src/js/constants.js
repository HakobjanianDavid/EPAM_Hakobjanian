const types = {
    product: 1,
    menuOption: 2
};

const mainMenuList = [
    'Товары',
    'Корзина'
];

const productsList = [
    {
        name: 'Товар 1',
        typeId: types.product
    },
    {
        name: 'Товар 2',
        typeId: types.product
    }, 
    {
        name: 'Товар 3',
        typeId: types.product
    },
];

// interface someInt  {
//     name: string,
//     typeId : number,
// }

const productsActs = [
    {
        name: 'Корзина',
        typeId:  types.menuOption,
    },
    { 
        name: 'Вернуться на главную страницу',
        typeId: types.menuOption,
    },
];



const cartActs = [
    {
        name: 'Оплата',
        typeId: types.menuOption,
    },
    {
        name: 'Вернуться на главную страницу',
        typeId: types.menuOption,
    }
];

const cardNumberActs = [
    'Введите номер карты',
    'Вернуться на главную страницу'
];

const cardOwnerActs = [
    'Имя владельца',
    'Вернуться на главную страницу'
];

const cardCVVActs = [
    'CVV',
    'Вернуться на главную страницу'
];

export { mainMenuList, productsList, productsActs, cartActs, cardNumberActs, cardOwnerActs, cardCVVActs };
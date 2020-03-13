enum types { product = 1, menuOption = 2 }

interface productsListInstance {
    name: string,
    readonly typeId: number,
}

const mainMenuList: string[] = [
    'Товары',
    'Корзина',
];

const productsList: productsListInstance[] = [
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

const productsActs: productsListInstance[] = [
    {
        name: 'Корзина',
        typeId: types.menuOption,
    },
    {
        name: 'Вернуться на главную страницу',
        typeId: types.menuOption,
    },
];

const cartActs: productsListInstance[] = [
    {
        name: 'Оплата',
        typeId: types.menuOption,
    },
    {
        name: 'Вернуться на главную страницу',
        typeId: types.menuOption,
    }
];

const cardNumberActs: string[] = [
    'Введите номер карты',
    'Вернуться на главную страницу'
];

const cardOwnerActs: string[] = [
    'Имя владельца',
    'Вернуться на главную страницу'
];

const cardCVVActs: string[] = [
    'CVV',
    'Вернуться на главную страницу'
];

export { mainMenuList, productsList, productsActs, cartActs, cardNumberActs, cardOwnerActs, cardCVVActs, productsListInstance };
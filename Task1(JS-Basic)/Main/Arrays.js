const goods = [
    {
        id: 1,
        name: 'Banana',
        rating: 4.1,
        description: 'yellow fruit',
        price: 105,
        category: 'food'
    },
    {
        id: 2,
        name: 'Red Banana',
        rating: 4.2,
        description: 'red fruit',
        price: 105,
        category: 'food'
    },
    {
        id: 3,
        name: 'Apple',
        rating: 4.3,
        description: 'red fruit',
        price: 105,
        category: 'food'
    },
    {
        id: 4,
        name: 'BMW',
        rating: 4.9,
        description: 'Premium',
        price: 3000,
        category: 'car'
    },
    {
        id: 5,
        name: 'Wolksvagen',
        rating: 3.8,
        description: 'Standard',
        price: 2000,
        category: 'car'
    },
    {
        id: 6,
        name: 'KIA',
        rating: 2.7,
        description: 'Basic',
        price: 1000,
        category: 'car'
    },
];


function getItemByName(goods, name) {
    return goods.filter((el) => {
        const lowerCaseEl = el.name.toLowerCase();
        return lowerCaseEl.includes(name.toLowerCase());
    });
}


function deleteItem(goods, id) {
    return goods.filter((el) => {
        return el.id !== id;
    });
}
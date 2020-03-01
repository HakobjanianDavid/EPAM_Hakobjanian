function Cart() {}

Cart.prototype.add = function (productItem) {
    if(this.products) {
        return this.products.push(productItem);
    } else {
        return this.products = [productItem];
    }

};

Cart.prototype.delete = function (id) {

    this.products = this.products.filter(function del(el) {
        return el.id !== id;
    });
    return this.products;
};

Cart.prototype.show = function () {
    return this.products;
};

let cart = new Cart();

cart.add({
    id: 0,
    name: 'Tovar1',
    rating: 5,
    description: 'Here description of item..',
    price: 100,
    category: 'food'
});

cart.add({
    id: 1,
    name: 'Tovar2',
    rating: 4,
    description: 'Here description of item..',
    price: 125,
    category: 'food'
});

cart.add({
    id: 2,
    name: 'Tovar3',
    rating: 10,
    description: 'Here description of item..',
    price: 200,
    category: 'food'
});

cart.add({
    id: 3,
    name: 'Tovar2',
    rating: 8.5,
    description: 'Here description of item..',
    price: 500,
    category: 'food'
});

cart.delete(1);

console.log(cart.show());


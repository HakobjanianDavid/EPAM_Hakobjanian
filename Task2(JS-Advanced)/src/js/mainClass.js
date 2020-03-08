import { cartCount } from './common';

class Menu {
    constructor(page, itemsList = [], actsList = []) {
        this.page = page;
        this.itemsList = itemsList;
        this.list = '';
        this.actionsList = actsList;
        this.actions = '';
    }

    print() {
        this.prescriptio = `Нет такого пункта меню!`;
        alert(this.prescriptio);
    }

    preparePrescriptio() {
        return `Добро пожаловать в наш магазин!\nКорзина: ${cartCount}\nСтраница: ${this.page}\nМеню:\n${this.list}${this.actions}`;
    }

    prepareList() {
        return this.itemsList.forEach((el, ind) => {
            return this.list += `${++ind}. ${el}\n`;
        });
    }

    prepareActs() {
        this.actions = '';
        return this.actionsList.forEach((el, ind) => {
            return this.actions += `${this.itemsList.length + (++ind)}. ${el}\n`;
        });
    }

    action() {
        this.list = '';
        this.prepareList();
        this.prepareActs();
        const prescriptio = this.preparePrescriptio();
        const a = prompt(prescriptio);
        return a;
    }
}

export {Menu};
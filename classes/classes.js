function generateId() {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();

    return uniqid
}

// Class - Корзина покупок
class Basket {
    constructor(goodName, hasDiscount = false, price = 0) {
        this.id = generateId();
        this.goodName = goodName;
        this.hasDiscount = hasDiscount;
        this.price = price
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    
    // Генерация DOM объектов
    const headerItems = ['ID', 'Название Товара', 'Цена']
    const basketList = [];

    function addGood() {
        const name = prompt('Введите название');
        const price = prompt('Введите цену');
        console.log(Number(price))
        createGood(new Basket(name, false, Number(price)));
    }

    const basket = new Basket('sneakers', true, 350);
    basketList.push(basket)
    basketList.push(new Basket('Lamp', false, 600))

    // Генерация Таблицы
    const table = document.createElement('table');
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')
    const tr = document.createElement('tr');

    thead.appendChild(tr);
    table.appendChild(thead);

    headerItems.forEach((name) => {
        const td = document.createElement('td');
        td.innerText = name;

        tr.appendChild(td);
    })

    function createGood(basketItem) {
        const basketContainer = document.createElement('tr')

        const td1 = document.createElement('td');
        td1.innerText = basketItem.id

        const td2 = document.createElement('td')
        td2.innerText = basketItem.goodName;

        const td3 = document.createElement('td');
        td3.innerText = basketItem.price;

        basketContainer.appendChild(td1)
        basketContainer.appendChild(td2)
        basketContainer.appendChild(td3)
        tbody.appendChild(basketContainer)
    }

    basketList.forEach(createGood)
    table.appendChild(tbody)


    const addButton = document.createElement('button');
    addButton.innerText = 'Добавить';
    addButton.addEventListener('click', addGood);

    // Вход в программу
    app.appendChild(addButton);
    app.appendChild(table);
});

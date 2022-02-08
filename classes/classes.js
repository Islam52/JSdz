const DISCOUNT_ELEMENT_ID = 'discountCheckbox'

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
    const headerItems = ['ID', 'Название Товара', 'Цена', 'Скидка']
    const basketList = [];

    function addGood() {
        createGood(new Basket(nameInput.value, false, Number(priceInput.value)));
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

    function addGood() {
        const name = document.querySelector('#${GOOD_NAME_ID}');
        const price = document.querySelector('#${GOOD_NAME_ID}');
        const discount = document.querySelector('#${GOOD_NAME_ID}');

        createGood(new Basket(name.value, discount.checked))
    }

    basketList.forEach(createGood)
    table.appendChild(tbody)

    // Генерация модального окна
    const modal = document.createElement('dialog')

    const nameInput = document.createElement('input')
    nameInput.placeholder = 'введите название товара'




    const priceInput = document.createElement('input')
    priceInput.placeholder = 'введите цену товара'

    const goodDiscountCheckbox = document.createElement('input')
    goodDiscountCheckbox.innerText = 'Скидка'
    goodDiscountCheckbox.id = DISCOUNT_ELEMENT_ID
    goodDiscountCheckbox.type = 'checkbox'
    goodDiscountCheckbox.style.display = 'block'

    const addGoodButton = document.createElement('button')
    addGoodButton.innerText = 'добавить товар'

    addGoodButton.addEventListener('click', addGood)

    modal.appendChild(nameInput)
    modal.appendChild(priceInput)
    modal.appendChild(addGoodButton)

    const addButton = document.createElement('button');
    addButton.innerText = 'Добавить';
    addButton.addEventListener('click', () => {
        modal.open = true;
    });

    // Вход в программу
    app.appendChild(addButton);
    app.appendChild(table);
    app.appendChild(modal)
});




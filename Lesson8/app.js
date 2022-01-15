'use strict';


// 1. получите все кнопки и сохраните в переменную

// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick

let Button = document.querySelectorAll('button');
Button.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */



function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    // const cardNode = ;

    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: cardNode.querySelector('img'), // здесь картинка внутри .product
        productName: cardNode.querySelector('.productName'), // здесь .productName, который внутри .product
        button: cardNode.querySelector('button'), // здесь button, который внутри .product
    };

    // 4. получаем текст на кнопке, которая внутри .product
    
    
    if (textOnButton === 'Подробнее') { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        showMoreText(card);
    } else if (textOnButton === 'Отмена') { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    
    // 5. картинке внутри .product ставим стиль display: block
    
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
    
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    
    // 6.1 сохраняем произвольный текст в переменную
    
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    
    card.img.style.display = 'none';
    var text = 'When North Sea gas was discovered, the system was modified and a pipeline system was created from the onshore terminals to domestic consumers. The system stores gas by increasing the pressure in the main pipeline. Storage is also created by pumping gas back into depleted oil and gas reservoirs';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}
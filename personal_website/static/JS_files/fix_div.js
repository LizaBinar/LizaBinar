const lg_width = 991


// Получаем нужный элемент
const element = document.querySelector('.card-header');

const Visible = function (target) {
    // Все позиции элемента
    const targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        console.clear();
        console.log('Вы видите элемент :)');
    } else {
        // Если элемент не видно, то запускаем этот код
        console.clear();
    }
    ;
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    let index;
    for (index = 0; index < element.length; ++index) {
        console.log(element[index]);
    }
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible(element);


function adaptBlock() {
    let InfoBlock = document.querySelector('.Info');
    if (window.screen.width >= lg_width) {
        InfoBlock.classList.add('position-fixed');
    }
}

window.onload = adaptBlock;

const lg_width = 991


// Получаем нужный элемент


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

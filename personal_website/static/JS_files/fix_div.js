const lg_width = 991


// Получаем нужный элемент





function adaptBlock() {
    let InfoBlock = document.querySelector('.Info');
    if (window.screen.width >= lg_width) {
        InfoBlock.classList.add('position-fixed');
    }
}

window.onload = adaptBlock;

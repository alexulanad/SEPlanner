"use strict";

let largeBlockCategoryActive = true;
let largeBlockProjectActive = true;
let categoryKeyTarget = "lightArmor";

// const blockSelectionLarge = document.querySelector('#block-selection-large');
// const blockSelectionSmall = document.querySelector('#block-selection-small');
const blockSelectionLarge = document.querySelector('.size-block-selection__large');
const blockSelectionSmall = document.querySelector('.size-block-selection__small');



const categories = document.querySelector('#categories');
let categoryTitle = document.querySelector('#category-title');
let projectTitle = document.querySelector('#project-title');
const blockListCategory = document.querySelector('#block-list-category');

const addClass = function(event, className) {
    if (event.target) {
        event.target.classList.add(className);
    } else {
        event.classList.add(className);
    }
};

const removeClass = function(event, className) {
    if (event.target) {
        event.target.classList.remove(className);
    } else {
        event.classList.remove(className);
    }
};

// Функция вывода блоков игры из выбранной категории
const displayBlocksCategory = function(categoryKey) {
    blockListCategory.innerHTML = "";
    let blocks = [];
    if (largeBlockCategoryActive === true) {
        blocks = blockCategories[categoryKey].large;
    } else {
        blocks = blockCategories[categoryKey].small;
    }
    console.log(blocks.length);

    if (blocks.length != 0) {
        blocks.forEach((item, index) => {
            blockListCategory.innerHTML += `
            <div class="content-block__block-item" data-block-id="${index}">
                <img class="block-image--ss" src="img/blocks/${item.img}">
                <span class="content-block__block-item-name">${item.title.ru}</span>
                <div class="button-add-block">
                <svg class="button-add-block__svg" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="button-add-block__path" d="M19 15V12H17V15H14V17H17V20H19V17H22V15H19ZM2 7H15V9H2V7ZM2 11H15V13H2V11ZM2 15H12V17H2V15Z" fill="#AEC2CC"/>
                </svg>


                </div>
            </div>
            `;

            // сделать появление каждого итема через определенный интервал (возможно добавить анимацию)
            // реализовать через стили, скрытие элемента и появление его кажду итерацию на + 10мс
        });
        blockListCategory.lastElementChild.style.marginBottom = 0;

        for (let item of blockListCategory.children) {
            const addBlock = item.querySelector(".button-add-block");
            const addBlockSvg = item.querySelector(".button-add-block__svg");
            const addBlockIcon = item.querySelector(".button-add-block__path");


             item.addEventListener("mouseover", () => {
                // addBlock.style.visibility = "visible";
                 console.log(item.dataset.blockId);
             });

             item.addEventListener("mouseout", () => {
                // addBlock.style.visibility = "hidden";
                 console.log(item.dataset.blockId);
             });

             addBlock.addEventListener("mouseover", () => {
                addClass(addBlockIcon, "button-add-block__path--hover");
             });

             addBlock.addEventListener("mouseout", () => {
                removeClass(addBlockIcon, "button-add-block__path--hover");
             });

             addBlock.addEventListener("mousedown", ()=> {
                addClass(addBlockIcon, "button-add-block__path--click");
                addClass(addBlockSvg, "button-add-block__svg--click");
             });

             addBlock.addEventListener("mouseup", ()=> {
                removeClass(addBlockIcon, "button-add-block__path--click");
                removeClass(addBlockSvg, "button-add-block__svg--click");
             });
        }
    }
    // else {
    //     blockListCategory.innerHTML = `<p style="text-align: center; color: #ccc">У данной категории отсутствуют малые блоки.</p>`;
    // }
    // проверяем реальную ширину offset* элемента и фактическую client* (без учета ширины scroll-а)
    if (blockListCategory.offsetWidth > blockListCategory.clientWidth) {
        let blockItem = document.querySelectorAll('.content-block__block-item').forEach(item => {
            item.style.marginRight = "4px";
        });
    }
};

// Стартовый вызов функции вывода игровых блоков из первой категории
displayBlocksCategory(categories.firstElementChild.dataset.categoryKey);

// Инициализация событий для категорий
for (let item of categories.children) {
    if (item.tagName === "IMG") {
        item.addEventListener("mouseover", (event) => {
            addClass(event, "block-image--hover");
            categoryTitle.textContent = item.dataset.categoryName;
        }, false);

        item.addEventListener("mouseout", (event) => {
            removeClass(event, "block-image--hover");
            categoryTitle.textContent = "";
        }, false);

        item.addEventListener("click", () => {
            // item.dataset.active = "true";
            addClass(item, "block-image--focus");
            projectTitle.textContent = item.dataset.categoryName;
            const categoryName = item.dataset.categoryName;
            for (let item of categories.children) {
                if (item.dataset.categoryName != categoryName) {
                    item.dataset.active = "false";
                    removeClass(item, "block-image--focus");
                }
            }
            // console.log(blockCategories[item.dataset.categoryKey].small.length);

            // if (blockCategories[item.dataset.categoryKey].small.length == 0) {
            //     blockSelectionSmall.style.pointerEvents = "none";
            // } else {
            //     blockSelectionSmall.style.pointerEvents = "auto";
            // }

            // Вызов функции вывода блоков выбранной категории
            displayBlocksCategory(item.dataset.categoryKey);
            // Сохраняет ключ, выбранной категории, для передачи значения функции при выборе размера блока
            categoryKeyTarget = item.dataset.categoryKey;
            // Возвращаем положение скролла в начальную позицию
            blockListCategory.scrollTop = 0;
        });
    }
}

blockSelectionLarge.addEventListener("mouseover", (event) => {
    addClass(event, "size-block-selection--hover");
});

blockSelectionLarge.addEventListener("mouseout", (event) => {
    removeClass(event, "size-block-selection--hover");
});

blockSelectionLarge.addEventListener("click", (event)=> {
    largeBlockCategoryActive = true;
    addClass(event, "size-block-selection--focus");
    for (let item of blockSelectionSmall.children) {
        removeClass(item, "size-block-selection--focus");
    }
    displayBlocksCategory(categoryKeyTarget);
    blockListCategory.scrollTop = 0;
});

blockSelectionSmall.addEventListener("mouseover", ()=> {
    for (let item of blockSelectionSmall.children) {
        addClass(item, "size-block-selection--hover");
    }
});

blockSelectionSmall.addEventListener("mouseout", ()=> {
    for (let item of blockSelectionSmall.children) {
        removeClass(item, "size-block-selection--hover");
    }
});

blockSelectionSmall.addEventListener("click", ()=> {
    largeBlockCategoryActive = false;
    removeClass(blockSelectionLarge, "size-block-selection--focus");
    for (let item of blockSelectionSmall.children) {
        addClass(item, "size-block-selection--focus");
    }
    displayBlocksCategory(categoryKeyTarget);
    blockListCategory.scrollTop = 0;
}, false);





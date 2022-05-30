"use strict";

let largeBlockCategoryActive = true;
let largeBlockProjectActive = true;
let categoryKeyTarget = "lightArmor";

const blockSelectionLarge = document.querySelector('#block-selection-large');
const blockSelectionSmall = document.querySelector('#block-selection-small');
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
        console.log("Large");
    } else {
        blocks = blockCategories[categoryKey].small;
        console.log("Small");
    }

    blocks.forEach(item => {
        blockListCategory.innerHTML += `
        <div class="content-block__block-item">
            <img class="block-image--ss" src="img/blocks/${item.img}">
            <span class="content-block__block-item-name">${item.title.ru}</span>
        </div>
        `;
    });

    blockListCategory.lastElementChild.style.marginBottom = 0;
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



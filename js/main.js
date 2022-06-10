"use strict";

let largeBlockCategoryActive = true;
let largeBlockProjectActive = true;
let categoryKeyTarget = "lightArmor";

// const blockSelectionLarge = document.querySelector('#block-selection-large');
// const blockSelectionSmall = document.querySelector('#block-selection-small');
const blockSelectionLarge = document.querySelectorAll('.size-block-selection__large');
const blockSelectionSmall = document.querySelectorAll('.size-block-selection__small');
const blockSelectionCategoryLarge = document.querySelector('#block-selection-category-large');
const blockSelectionCategorySmall = document.querySelector('#block-selection-category-small');
const blockSelectionProjectLarge = document.querySelector('#block-selection-project-large');
const blockSelectionProjectSmall = document.querySelector('#block-selection-project-small');



const categories = document.querySelector('#categories');
let categoryTitle = document.querySelector('#category-title');
let projectTitle = document.querySelector('#project-title');
const blockListCategory = document.querySelector('#block-list-category');
const blockListProject = document.querySelector('#block-list-project');

// let blocks = [];
let projectBlocks = [];
let projectBlocksSmall = [];

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

// Функция вывода блоков проекта из массива projectBlocks

let displayBlocksProject = function() {
    blockListProject.innerHTML = "";
    let blocks = [];
    if (largeBlockProjectActive === true) {
        blocks = projectBlocks.filter(item => item.largeBlock === true);
    } else {
        blocks = projectBlocks.filter(item => item.largeBlock === false);
    }
    // console.log(blocks);
    // console.log(projectBlocks);

    if (blocks.length != 0) {
        blocks.forEach((item, index) => {
            blockListProject.innerHTML += `
            <div class="content-block__block-item">
                <img class="block-image--ss" src="img/blocks/${item.block.img}">
                <span class="content-block__block-item-name">${item.block.title.ru}</span>
                <span class="content-block__block-item-name">${item.amount}</span>
                <div class="button-add-block" data-block-id="${index}">
                    <svg class="button-add-block__svg" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="button-add-block__svg-path" d="M19 15V12H17V15H14V17H17V20H19V17H22V15H19ZM2 7H15V9H2V7ZM2 11H15V13H2V11ZM2 15H12V17H2V15Z" fill="rgb(174, 194, 204, 0.9)"/>
                    </svg>
                </div>
            </div>
            `;
        });
        blockListProject.lastElementChild.style.marginBottom = 0;

        // for (let item of blockListCategory.children) {
        //     const delBlock = item.querySelector(".button-add-block");
        //     const delBlockSvg = item.querySelector(".button-add-block__svg");
        //     const delBlockSvgPath = item.querySelector(".button-add-block__svg-path");

        //      delBlock.addEventListener("mouseover", () => {
        //         addClass(delBlockSvgPath, "button-add-block__path--hover");
        //      });

        //      delBlock.addEventListener("mouseout", () => {
        //         removeClass(delBlockSvgPath, "button-add-block__path--hover");
        //      });

        //      delBlock.addEventListener("mousedown", ()=> {
        //         addClass(delBlockSvgPath, "button-add-block__path--click");
        //         addClass(delBlockSvg, "button-add-block__svg--click");
        //      });

        //      delBlock.addEventListener("mouseup", (event)=> {
        //         removeClass(delBlockSvgPath, "button-add-block__path--click");
        //         removeClass(delBlockSvg, "button-add-block__svg--click");
        //         console.log(item.dateset.blockId);
        //         if (largeBlockCategoryActive === true) {
        //             projectBlocks.push(blocks[event.currentTarget.dataset.blockId]);
        //         } else {
        //             projectBlocksSmall.push(blocks[event.currentTarget.dataset.blockId]);
        //         }
        //      }, false);
        // }
    }
    // проверяем реальную ширину offset* элемента и фактическую client* (без учета ширины scroll-а)
    if (blockListProject.offsetWidth > blockListProject.clientWidth) {
        let blockItem = document.querySelectorAll('.content-block__block-item').forEach(item => {
            item.style.marginRight = "4px";
        });
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
            <div class="content-block__block-item">
                <img class="block-image--ss" src="img/blocks/${item.img}">
                <span class="content-block__block-item-name">${item.title.ru}</span>
                <div class="button-add-block" data-block-id="${index}">
                    <svg class="button-add-block__svg" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="button-add-block__svg-path" d="M19 15V12H17V15H14V17H17V20H19V17H22V15H19ZM2 7H15V9H2V7ZM2 11H15V13H2V11ZM2 15H12V17H2V15Z" fill="rgb(174, 194, 204, 0.9)"/>
                    </svg>
                </div>
            </div>
            `;
        });
        blockListCategory.lastElementChild.style.marginBottom = 0;

        for (let item of blockListCategory.children) {
            const addBlock = item.querySelector(".button-add-block");
            const addBlockSvg = item.querySelector(".button-add-block__svg");
            const addBlockSvgPath = item.querySelector(".button-add-block__svg-path");


             item.addEventListener("mouseover", () => {
                // addBlock.style.visibility = "visible";
                //  console.log(item.dataset.blockId);
             });

             item.addEventListener("mouseout", () => {
                // addBlock.style.visibility = "hidden";
                //  console.log(item.dataset.blockId);
             });

             addBlock.addEventListener("mouseover", () => {
                addClass(addBlockSvgPath, "button-add-block__path--hover");
             });

             addBlock.addEventListener("mouseout", () => {
                removeClass(addBlockSvgPath, "button-add-block__path--hover");
             });

             addBlock.addEventListener("mousedown", ()=> {
                addClass(addBlockSvgPath, "button-add-block__path--click");
                addClass(addBlockSvg, "button-add-block__svg--click");
             });

             addBlock.addEventListener("mouseup", (event)=> {
                removeClass(addBlockSvgPath, "button-add-block__path--click");
                removeClass(addBlockSvg, "button-add-block__svg--click");
                // console.log(item.dateset.blockId);
                    projectBlocks.push({
                        largeBlock: (largeBlockCategoryActive === true) ? true : false,
                        block: blocks[event.currentTarget.dataset.blockId],
                        amount: 1,
                    });
                    // console.log(event.currentTarget.dataset.blockId);
                displayBlocksProject();
             }, false);
        }
    }
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

blockSelectionLarge.forEach(item => {
    item.addEventListener("mouseover", () => {
    addClass(item, "size-block-selection--hover");
    });
});

blockSelectionLarge.forEach(item => {
    item.addEventListener("mouseout", () => {
    removeClass(item, "size-block-selection--hover");
    });
});

blockSelectionSmall.forEach(item => {
    item.addEventListener("mouseover", ()=> {
        for (let i of item.children) {
            addClass(i, "size-block-selection--hover");
        }
    });
});

blockSelectionSmall.forEach(item => {
    item.addEventListener("mouseout", ()=> {
        for (let i of item.children) {
            removeClass(i, "size-block-selection--hover");
        }
    });
});

blockSelectionCategoryLarge.addEventListener("click", (event)=> {
    largeBlockCategoryActive = true;
    addClass(event, "size-block-selection--focus");
    for (let item of blockSelectionCategorySmall.children) {
        removeClass(item, "size-block-selection--focus");
    }
    displayBlocksCategory(categoryKeyTarget);
    blockListCategory.scrollTop = 0;
});

blockSelectionCategorySmall.addEventListener("click", ()=> {
    largeBlockCategoryActive = false;
    removeClass(blockSelectionCategoryLarge, "size-block-selection--focus");
    for (let item of blockSelectionCategorySmall.children) {
        addClass(item, "size-block-selection--focus");
    }
    displayBlocksCategory(categoryKeyTarget);
    blockListCategory.scrollTop = 0;
}, false);

blockSelectionProjectLarge.addEventListener("click", (event)=> {
    largeBlockProjectActive = true;
    addClass(event, "size-block-selection--focus");
    for (let item of blockSelectionProjectSmall.children) {
        removeClass(item, "size-block-selection--focus");
    }
    displayBlocksProject();
    blockListProject.scrollTop = 0;
});

blockSelectionProjectSmall.addEventListener("click", ()=> {
    largeBlockProjectActive = false;
    removeClass(blockSelectionProjectLarge, "size-block-selection--focus");
    for (let item of blockSelectionProjectSmall.children) {
        addClass(item, "size-block-selection--focus");
    }
    displayBlocksProject();
    blockListProject.scrollTop = 0;
}, false);





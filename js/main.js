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
const sizeBlockSelectionTitleleft = document.querySelector('#size-block-selection__title--left');
const sizeBlockSelectionTitleRight = document.querySelector('#size-block-selection__title--right');

const categories = document.querySelector('#categories');
let categoryTitle = document.querySelector('#category-title');
let projectTitle = document.querySelector('#project-title');
const blockListCategory = document.querySelector('#block-list-category');
const blockListProject = document.querySelector('#block-list-project');

let projectBlocks = [];
// let projectBlocksSmall = [];

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

const displayBlocksProject = function() {

    blockListProject.innerHTML = "";

    const addBlockProject = function(item, index) {
        blockListProject.innerHTML += `
        <div class="block-item">
            <div class="block-item__base">
                <img class="block-image--ss" src="img/blocks/${item.block.img}">
                <span class="block-item__name">${item.block.title.ru}</span>
                <span class="block-item__name">${item.amount}</span>
                <div class="button-icon" data-block-id="${index}">
                    <svg class="button-icon__svg" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-playlist-remove">
                        <path class="button-icon__svg-path" d="M2,6V8H14V6H2M2,10V12H11V10H2M14.17,10.76L12.76,12.17L15.59,15L12.76,17.83L14.17,19.24L17,16.41L19.83,19.24L21.24,17.83L18.41,15L21.24,12.17L19.83,10.76L17,13.59L14.17,10.76M2,14V16H11V14H2Z" fill="rgb(174, 194, 204, 0.9)"/>
                    </svg>
                </div>
            </div>
            <div class="block-item__specification">
                <div class="block-item__image-block">
                    <img class="block-image--bs" src="img/blocks/${item.block.img}">
                </div>
                <div class="block-item__specification-block">
                    <div class="block-item__content-block">
                        <div class="block-item__content-title">Описание</div>
                        <div class="block-item__content-description">${item.block.description}</div>
                    </div>

                    <div class="block-item__content-block">
                        <div class="block-item__content-title">Характеристики</div>
                        <div class="block-item__content-item">
                            <span class="block-item__content-item-title">Масса</span>
                            <span class="block-item__content-item-value">${item.block.weight}</span>
                            <span class="block-item__content-item-value-unit">кг.</span>
                        </div>
                        <div class="block-item__content-item">
                            <span class="block-item__content-item-title">Прочность</span>
                            <span class="block-item__content-item-value">${item.block.integrity}</span>
                            <span class="block-item__content-item-value-unit">ед.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    };

    if (projectBlocks.length != 0) {
        if (largeBlockProjectActive === true) {
            projectBlocks.filter(function (item, index) {
                if (item.largeBlock === true) {
                    addBlockProject(item, index);
                }
            });
        } else {
            projectBlocks.filter(function (item, index) {
                if (item.largeBlock !== true) {
                    addBlockProject(item, index);
                }
            });
        }
    }

    if (blockListProject.innerHTML != "") {
        blockListProject.lastElementChild.style.marginBottom = 0;
    }

    for (let item of blockListProject.children) {
        const buttonIcon = item.querySelector(".button-icon");
        const buttonIconSvg = item.querySelector(".button-icon__svg");
        const buttonIconSvgPath = item.querySelector(".button-icon__svg-path");
        const blockItemBase = item.querySelector(".block-item__base");
        const blockItemSpecification = item.querySelector(".block-item__specification");

        buttonIcon.addEventListener("mouseenter", () => {
            addClass(buttonIconSvgPath, "button-icon__svg-path--hover");
        });

        buttonIcon.addEventListener("mouseleave", () => {
        removeClass(buttonIconSvgPath, "button-icon__svg-path--hover");
        if (buttonIconSvg.classList.contains('button-icon__svg--click') == true) {
            removeClass(buttonIconSvg, "button-icon__svg--click");
        }
        });

        buttonIcon.addEventListener("mousedown", ()=> {
            addClass(buttonIconSvg, "button-icon__svg--click");
        });

        buttonIcon.addEventListener("mouseup", (event)=> {
            removeClass(buttonIconSvg, "button-icon__svg--click");
            // console.log(buttonIcon.dataset.blockId);
            projectBlocks.splice(event.currentTarget.dataset.blockId, 1);
            displayBlocksProject();
        });

        blockItemBase.addEventListener("click", (e)=> {
            if (e.currentTarget == e.target) {
                if (blockItemSpecification.style.maxHeight) {
                    blockItemSpecification.style.maxHeight = null;
                    projectBlocks[buttonIcon.dataset.blockId].active = false;
                } else {
                    for (let item of blockListProject.children) {
                        const itemMaxHeight = item.querySelector(".block-item__specification");
                        const buttonIcon = item.querySelector(".button-icon");
                        if (itemMaxHeight.style.maxHeight) {
                            itemMaxHeight.style.maxHeight = null;
                            projectBlocks[buttonIcon.dataset.blockId].active = false;
                        }
                    }
                    // console.log(e.currentTarget, e.target);
                    projectBlocks[buttonIcon.dataset.blockId].active = true;
                    blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
                }
            }
        }, true);

        // console.log(buttonIcon.dataset.blockId);
        if (projectBlocks[buttonIcon.dataset.blockId].active === true) {
            blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
            // projectBlocks.forEach(item => {
            //     item.active = false;
            // });
        } else {
            blockItemSpecification.style.maxHeight = null;
        }

        // console.log(buttonIcon);
        // console.log(projectBlocks[buttonIcon.dataset.blockId].active);
        // if (item.active === true) {
        //     console.log(item.active);
        // }
            // const blockItemSpecification = blockListProject.children.querySelector(".block-item__specification");
        //     blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
        // }
    }

    // проверяем реальную ширину offset* элемента и фактическую client* (без учета ширины scroll-а)
    if (blockListProject.offsetWidth > blockListProject.clientWidth) {
        blockListProject.querySelectorAll('.block-item').forEach(item => {
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
    // console.log(blocks.length);
    // console.log(blocks);
    if (blocks.length != 0) {
        blocks.forEach((item, index) => {
            blockListCategory.innerHTML += `
            <div class="block-item">
                <div class="block-item__base">
                    <img class="block-image--ss" src="img/blocks/${item.img}">
                    <span class="block-item__name">${item.title.ru}</span>
                    <div class="button-icon" data-block-id="${index}">
                        <svg class="button-icon__svg" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="button-icon__svg-path" d="M19 15V12H17V15H14V17H17V20H19V17H22V15H19ZM2 7H15V9H2V7ZM2 11H15V13H2V11ZM2 15H12V17H2V15Z" fill="rgb(174, 194, 204, 0.9)"/>
                        </svg>
                    </div>
                </div>
                <div class="block-item__specification">
                    <div class="block-item__image-block">
                        <img class="block-image--bs" src="img/blocks/${item.img}">
                    </div>
                    <div class="block-item__specification-block">
                        <div class="block-item__content-block">
                            <div class="block-item__content-title">Описание</div>
                            <div class="block-item__content-description">${item.description}</div>
                        </div>

                        <div class="block-item__content-block">
                            <div class="block-item__content-title">Характеристики</div>
                            <div class="block-item__content-item">
                                <span class="block-item__content-item-title">Масса</span>
                                <span class="block-item__content-item-value">${item.weight}</span>
                                <span class="block-item__content-item-value-unit">кг.</span>
                            </div>
                            <div class="block-item__content-item">
                                <span class="block-item__content-item-title">Прочность</span>
                                <span class="block-item__content-item-value">${item.integrity}</span>
                                <span class="block-item__content-item-value-unit">ед.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

        blockListCategory.lastElementChild.style.marginBottom = 0;

        for (let item of blockListCategory.children) {
            const buttonIcon = item.querySelector(".button-icon");
            const buttonIconSvg = item.querySelector(".button-icon__svg");
            const buttonIconSvgPath = item.querySelector(".button-icon__svg-path");
            const blockItemBase = item.querySelector(".block-item__base");
            const blockItemSpecification = item.querySelector(".block-item__specification");

            item.addEventListener("mouseover", () => {
                // addBlock.style.visibility = "visible";
                //  console.log(item.dataset.blockId);
            });

            item.addEventListener("mouseout", () => {
                // addBlock.style.visibility = "hidden";
                //  console.log(item.dataset.blockId);
                // removeClass(buttonIconSvg, "button-icon__svg--click");

            });

            blockItemBase.addEventListener("click", (e)=> {
                // let itemBaseActive = e.querySelector(".block-item__base-active");
                if (e.currentTarget == e.target) {
                    if (blockItemSpecification.style.maxHeight) {
                        blockItemSpecification.style.maxHeight = null;
                        // removeClass(blockItemBase, "block-item__base-active");
                        // setTimeout(removeClass, 190, blockItemSpecification, "block-item__specification-active");
                        // removeClass(blockItemSpecification, "block-item__specification-active");
                    } else {
                        for (let item of blockListCategory.children) {
                            const itemMaxHeight = item.querySelector(".block-item__specification");
                            // const itemBaseNonActive = item.querySelector(".block-item__base");
                            if (itemMaxHeight.style.maxHeight) {
                                itemMaxHeight.style.maxHeight = null;
                                // removeClass(itemBaseNonActive, "block-item__base-active");
                                // setTimeout(removeClass, 190, itemMaxHeight, "block-item__specification-active");
                                // removeClass(itemMaxHeight, "block-item__specification-active");
                            }
                        }
                        // console.log(e.currentTarget.style);
                        // addClass(blockItemSpecification, "block-item__specification-active");
                        // addClass(blockItemBase, "block-item__base-active");
                        blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
                    }
                }
            }, true);

            buttonIcon.addEventListener("mouseenter", () => {
                addClass(buttonIconSvgPath, "button-icon__svg-path--hover");
            });

            buttonIcon.addEventListener("mouseleave", () => {
                removeClass(buttonIconSvgPath, "button-icon__svg-path--hover");
                if (buttonIconSvg.classList.contains('button-icon__svg--click') == true) {
                    removeClass(buttonIconSvg, "button-icon__svg--click");
                }
            });

            buttonIcon.addEventListener("mousedown", ()=> {
                addClass(buttonIconSvg, "button-icon__svg--click");
            });

            buttonIcon.addEventListener("mouseup", (event)=> {
                removeClass(buttonIconSvg, "button-icon__svg--click");
                // console.log(item.dateset.blockId);
                    projectBlocks.push({
                        largeBlock: (largeBlockCategoryActive === true) ? true : false,
                        // block: blocks[event.currentTarget.dataset.blockId],
                        block: blocks[buttonIcon.dataset.blockId],
                        amount: 1,
                        active: false,
                    });
                displayBlocksProject();
            });
        }
    }
    // проверяем реальную ширину offset* элемента и фактическую client* (без учета ширины scroll-а)
    if (blockListCategory.offsetWidth > blockListCategory.clientWidth) {
        blockListCategory.querySelectorAll('.block-item').forEach(item => {
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
    sizeBlockSelectionTitleleft.textContent = "Большие блоки";
});

blockSelectionCategorySmall.addEventListener("click", ()=> {
    largeBlockCategoryActive = false;
    removeClass(blockSelectionCategoryLarge, "size-block-selection--focus");
    for (let item of blockSelectionCategorySmall.children) {
        addClass(item, "size-block-selection--focus");
    }
    displayBlocksCategory(categoryKeyTarget);
    blockListCategory.scrollTop = 0;
    sizeBlockSelectionTitleleft.textContent = "Малые блоки";
});

blockSelectionProjectLarge.addEventListener("click", (event)=> {
    largeBlockProjectActive = true;
    addClass(event, "size-block-selection--focus");
    for (let item of blockSelectionProjectSmall.children) {
        removeClass(item, "size-block-selection--focus");
    }
    displayBlocksProject();
    blockListProject.scrollTop = 0;
    sizeBlockSelectionTitleRight.textContent = "Большие блоки";
});

blockSelectionProjectSmall.addEventListener("click", ()=> {
    largeBlockProjectActive = false;
    removeClass(blockSelectionProjectLarge, "size-block-selection--focus");
    for (let item of blockSelectionProjectSmall.children) {
        addClass(item, "size-block-selection--focus");
    }
    displayBlocksProject();
    blockListProject.scrollTop = 0;
    sizeBlockSelectionTitleRight.textContent = "Малые блоки";
});
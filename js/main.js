// Отключить событие, чтобы при повторном нажатии не менялся стиль на обратный (сейчас задействован addclass и removeclass)
"use strict";

const lib = {
    classToggle(event, className) {
        if (event.target) {
            event.target.classList.toggle(className);
        }
        if (!event.target && event) {
            event.classList.toggle(className);
        }
    },

    addClass(event, className) {
        if (event.target) {
            event.target.classList.add(className);
        }
        if (!event.target && event) {
            event.classList.add(className);
        }
    },

    removeClass(event, className) {
        if (event.target) {
            event.target.classList.remove(className);
        }
        if (!event.target && event) {
            event.classList.remove(className);
        }
    },

    addEvent(element, typeEvent, event) {
        element.addEventListener(typeEvent, event);
    },
};

const main = {
    categoryKeyTarget: "landingGear",
    largeBlockCategoryActive: true,
    largeBlockProjectActive: true,
    projectBlocks: [],

    categories: document.querySelector('#categories'),
    blockSelectionLarge: document.querySelectorAll('.size-block-selection__large'),
    blockSelectionSmall: document.querySelectorAll('.size-block-selection__small'),
    blockSelectionCategoryLarge: document.querySelector('#block-selection-category-large'),
    blockSelectionCategorySmall: document.querySelector('#block-selection-category-small'),
    blockSelectionProjectLarge: document.querySelector('#block-selection-project-large'),
    blockSelectionProjectSmall:  document.querySelector('#block-selection-project-small'),
    sizeBlockSelectionTitleleft: document.querySelector('#size-block-selection__title--left'),
    sizeBlockSelectionTitleRight: document.querySelector('#size-block-selection__title--right'),
    categoryTitle: document.querySelector('#category-title'),
    projectTitle: document.querySelector('#project-title'),
    blockListCategory: document.querySelector('#block-list-category'),
    blockListProject: document.querySelector('#block-list-project'),

    launchApp() {
        const categoryElement = this.categories.querySelector(`[data-category-key=${this.categoryKeyTarget}`);
        lib.classToggle(categoryElement, "block-image--focus");
        this.projectTitle.textContent = categoryElement.dataset.categoryName;
        this.blockSizeSelection();
        this.largeBlockCategoryActive == true ? (this.sizeBlockSelectionTitleleft.textContent = "Большие блоки") : (this.sizeBlockSelectionTitleleft.textContent = "Малые блоки");
        this.largeBlockProjectActive == true ? (this.sizeBlockSelectionTitleRight.textContent = "Большие блоки") : (this.sizeBlockSelectionTitleRight.textContent = "Малые блоки");
        this.displayCategoryBlocks();

    },
    blockSizeSelection() {
        if (this.largeBlockCategoryActive === true) {
            lib.classToggle(this.blockSelectionCategoryLarge, "size-block-selection--focus");
        }
        if (this.largeBlockProjectActive === true) {
            lib.classToggle(this.blockSelectionProjectLarge, "size-block-selection--focus");
        }
        if (this.largeBlockCategoryActive === false) {
            for (let item of this.blockSelectionCategorySmall.children) {
                lib.classToggle(item, "size-block-selection--focus");
            }
        }
        if (this.largeBlockProjectActive === false) {
            for (let item of this.blockSelectionProjectSmall.children) {
                lib.classToggle(item, "size-block-selection--focus");
            }
        }
    },

    // функция возвращает ссылку на массив: либо больших, либо малых блоков, согласно ключу largeBlockCategoryActive
    blockArrayDefinition() {
        return main.largeBlockCategoryActive == true ? blockCategories[this.categoryKeyTarget].large : blockCategories[this.categoryKeyTarget].small;
    },
    // функция отображения блоков категории на экране
    displayCategoryBlocks() {
        main.blockListCategory.innerHTML = "";
        const categoryBlocks = this.blockArrayDefinition();
        if (categoryBlocks.length != 0) {
            categoryBlocks.forEach((item, index) => {
                main.blockListCategory.innerHTML += `
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
        }
        //Убирает лишний нижний отступ у последнего элемента в массиве
        if (this.blockListCategory.innerHTML != "") {
            this.blockListCategory.lastElementChild.style.marginBottom = 0;
        }

        this.addEvent(categoryBlocks);
        this.scrollCheck();
    },

    // функция добаления событий для блоков выбранной категории
    addEvent(categoryBlocks) {
        for (let item of main.blockListCategory.children) {
            const buttonIcon = item.querySelector(".button-icon");
            const buttonIconSvg = item.querySelector(".button-icon__svg");
            const buttonIconSvgPath = item.querySelector(".button-icon__svg-path");
            const blockItemBase = item.querySelector(".block-item__base");
            const blockItemSpecification = item.querySelector(".block-item__specification");

            blockItemBase.addEventListener("click", (e)=> {
                if (e.currentTarget == e.target) {
                    if (blockItemSpecification.style.maxHeight) {
                        blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                        blockItemSpecification.style.maxHeight = null;
                        if (main.largeBlockCategoryActive === true) {
                            itemCategoryActive.largeBlockIndexActive = null;
                        } else {
                            itemCategoryActive.smallBlockIndexActive = null;
                        }
                        console.log(itemCategoryActive);
                        console.log("sadfsa");
                    } else {
                        for (let item of main.blockListCategory.children) {
                            const blockItemSpecification = item.querySelector(".block-item__specification");
                            const itemMaxHeight = item.querySelector(".block-item__specification");
                            if (itemMaxHeight.style.maxHeight) {
                                blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                                itemMaxHeight.style.maxHeight = null;
                            }
                        }
                        blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                        blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
                        if (main.largeBlockCategoryActive === true) {
                            itemCategoryActive.largeBlockIndexActive = buttonIcon.dataset.blockId;
                        } else {
                            itemCategoryActive.smallBlockIndexActive = buttonIcon.dataset.blockId;
                        }
                        console.log(itemCategoryActive);
                    }
                }
            }, true);

            if (main.largeBlockCategoryActive === true) {
                if (itemCategoryActive.largeBlockIndexActive != null && buttonIcon.dataset.blockId === itemCategoryActive.largeBlockIndexActive) {
                    blockItemSpecification.style.transition = "none";
                    blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
                }
            } else {
                if (itemCategoryActive.smallBlockIndexActive != null && buttonIcon.dataset.blockId === itemCategoryActive.smallBlockIndexActive) {
                    blockItemSpecification.style.transition = "none";
                    blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
                }
            }

            buttonIcon.addEventListener("mouseenter", () => {
                lib.classToggle(buttonIconSvgPath, "button-icon__svg-path--hover");
            });

            buttonIcon.addEventListener("mouseleave", () => {
                lib.classToggle(buttonIconSvgPath, "button-icon__svg-path--hover");
                if (buttonIconSvg.classList.contains('button-icon__svg--click') == true) {
                    lib.classToggle(buttonIconSvg, "button-icon__svg--click");
                }
            });

            buttonIcon.addEventListener("mousedown", ()=> {
                lib.classToggle(buttonIconSvg, "button-icon__svg--click");
            });

            buttonIcon.addEventListener("mouseup", ()=> {
                lib.classToggle(buttonIconSvg, "button-icon__svg--click");
                    this.projectBlocks.push({
                        largeBlock: (main.largeBlockCategoryActive === true) ? true : false,
                        block: categoryBlocks[buttonIcon.dataset.blockId],
                        amount: 1,
                        active: false,
                    });
                    console.log(this.projectBlocks);
                this.displayProjectBlocks();
                console.log(this.projectBlocks);
            });
        }
    },
    // функция добавления отступа справа для каждого блока категории, при условии наличия скролла
    scrollCheck() {
    // проверяем реальную ширину offset* элемента и фактическую client* (без учета ширины scroll-а)
        if (main.blockListCategory.offsetWidth > main.blockListCategory.clientWidth) {
            main.blockListCategory.querySelectorAll('.block-item').forEach(item => {
                item.style.marginRight = "4px";
            });
        }
    },

    // функция добавления отступа справа для каждого блока проекта, при условии наличия скролла
    scrollCheckProject() {
    // проверяем реальную ширину offset* элемента и фактическую client* (без учета ширины scroll-а)
        if (main.blockListProject.offsetWidth > main.blockListProject.clientWidth) {
            main.blockListProject.querySelectorAll('.block-item').forEach(item => {
                item.style.marginRight = "4px";
            });
        }
    },

    // Функция сортировки блоков проекта из массива projectBlocks, по критерию: большие, малые, и дальнейший вызов функции отображения блоков
    displayProjectBlocks() {
        main.blockListProject.innerHTML = "";
        if (main.projectBlocks.length != 0) {
            if (main.largeBlockProjectActive === true) {
                main.projectBlocks.filter(function (item, index) {
                    if (item.largeBlock === true) {
                        main.addBlockProject(item, index);
                    }
                });
            } else {
                main.projectBlocks.filter(function (item, index) {
                    if (item.largeBlock !== true) {
                        main.addBlockProject(item, index);
                    }
                });
            }
        }
        // Удаляем лишний нижний отступ у последнего отображенного блока
        if (this.blockListProject.innerHTML != "") {
            this.blockListProject.lastElementChild.style.marginBottom = 0;
        }
        this.addEventProject();
        this.scrollCheckProject();
    },

    // функция добвления и вывода блоков проекта на экран
    addBlockProject(item, index) {
        main.blockListProject.innerHTML += `
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
    },

    // функция добавления событий для блоков проекта
    addEventProject() {
        for (let item of this.blockListProject.children) {
            const buttonIcon = item.querySelector(".button-icon");
            const buttonIconSvg = item.querySelector(".button-icon__svg");
            const buttonIconSvgPath = item.querySelector(".button-icon__svg-path");
            const blockItemBase = item.querySelector(".block-item__base");
            const blockItemSpecification = item.querySelector(".block-item__specification");

            buttonIcon.addEventListener("mouseenter", () => {
                lib.classToggle(buttonIconSvgPath, "button-icon__svg-path--hover");
            });

            buttonIcon.addEventListener("mouseleave", () => {
                lib.classToggle(buttonIconSvgPath, "button-icon__svg-path--hover");
                if (buttonIconSvg.classList.contains('button-icon__svg--click') == true) {
                    lib.classToggle(buttonIconSvg, "button-icon__svg--click");
                }
            });

            buttonIcon.addEventListener("mousedown", ()=> {
                lib.classToggle(buttonIconSvg, "button-icon__svg--click");
            });

            buttonIcon.addEventListener("mouseup", (event)=> {
                lib.classToggle(buttonIconSvg, "button-icon__svg--click");
                main.projectBlocks.splice(event.currentTarget.dataset.blockId, 1);
                this.displayProjectBlocks();
            });

            blockItemBase.addEventListener("click", (e)=> {
                if (e.currentTarget == e.target) {
                    if (blockItemSpecification.style.maxHeight) {
                        blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                        blockItemSpecification.style.maxHeight = null;
                        main.projectBlocks[buttonIcon.dataset.blockId].active = false;
                    } else {
                        for (let item of main.blockListProject.children) {
                            const blockItemSpecification = item.querySelector(".block-item__specification");
                            const buttonIcon = item.querySelector(".button-icon");
                            if (blockItemSpecification.style.maxHeight) {
                                blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                                blockItemSpecification.style.maxHeight = null;
                                main.projectBlocks[buttonIcon.dataset.blockId].active = false;
                            }
                        }
                        blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                        main.projectBlocks[buttonIcon.dataset.blockId].active = true;
                        blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
                    }
                }
            }, true);

            if (main.projectBlocks[buttonIcon.dataset.blockId].active === true) {
                blockItemSpecification.style.transition = "none";
                blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
            }
        }
    },
};

class CreateProjectBlock {
    constructor(block, largeBlock, amount, active) {
        this.block = block; // ссылка на блок в массиве списка блоков (в зависимсости от размера и выбранной категории)
        this.largeBlock = largeBlock; // размеры блока: true - большой, false - малый
        this.amount = amount; // количество блоков данного типа
        this.active = active; // true - активный, false - нет (для развертывания?)
    }
}

let itemCategoryActive = {
    largeBlockIndexActive: null,
    smallBlockIndexActive: null,
};

main.launchApp();

// Инициализация событий для категорий
for (let item of main.categories.children) {
    if (item.tagName === "IMG") {
        item.addEventListener("mouseover", (event) => {
            lib.classToggle(event, "block-image--hover");
            main.categoryTitle.textContent = item.dataset.categoryName;
        }, false);

        item.addEventListener("mouseout", (event) => {
            lib.classToggle(event, "block-image--hover");
            main.categoryTitle.textContent = "";
        }, false);

        item.addEventListener("click", () => {
            lib.classToggle(item, "block-image--focus");
            main.projectTitle.textContent = item.dataset.categoryName;
            const categoryName = item.dataset.categoryName;
            for (let item of main.categories.children) {
                if (item.dataset.categoryName != categoryName) {
                    item.dataset.active = "false";
                    item.classList.remove("block-image--focus");
                }
            }

            itemCategoryActive.largeBlockIndexActive = null;
            itemCategoryActive.smallBlockIndexActive = null;

            // Сохраняет ключ категории, для передачи значения функции вывода блоков
            main.categoryKeyTarget = item.dataset.categoryKey;
            // Вызов функции вывода блоков выбранной категории
            main.displayCategoryBlocks();
            // Возвращаем положение скролла в начальную позицию
            main.blockListCategory.scrollTop = 0;
        });
    }
}

// Инициализация событий для переключателей больших и малых блоков
main.blockSelectionLarge.forEach(item => {
    item.addEventListener("mouseover", () => {
    lib.classToggle(item, "size-block-selection--hover");
    });
});

main.blockSelectionLarge.forEach(item => {
    item.addEventListener("mouseout", () => {
    lib.classToggle(item, "size-block-selection--hover");
    });
});

main.blockSelectionSmall.forEach(item => {
    item.addEventListener("mouseover", ()=> {
        for (let i of item.children) {
            lib.classToggle(i, "size-block-selection--hover");
        }
    });
    console.log(main.blockSelectionSmall);
});

main.blockSelectionSmall.forEach(item => {
    item.addEventListener("mouseout", ()=> {
        for (let i of item.children) {
            lib.classToggle(i, "size-block-selection--hover");
        }
    });
});

main.blockSelectionCategoryLarge.addEventListener("click", (event)=> {
    main.largeBlockCategoryActive = true;
    lib.addClass(event, "size-block-selection--focus");
    for (let item of main.blockSelectionCategorySmall.children) {
        lib.removeClass(item, "size-block-selection--focus");
    }
    main.displayCategoryBlocks();
    main.blockListCategory.scrollTop = 0;
    main.sizeBlockSelectionTitleleft.textContent = "Большие блоки";
});

main.blockSelectionCategorySmall.addEventListener("click", ()=> {
    main.largeBlockCategoryActive = false;
    lib.removeClass(main.blockSelectionCategoryLarge, "size-block-selection--focus");
    for (let item of main.blockSelectionCategorySmall.children) {
        lib.addClass(item, "size-block-selection--focus");
    }
    main.displayCategoryBlocks();
    main.blockListCategory.scrollTop = 0;
    main.sizeBlockSelectionTitleleft.textContent = "Малые блоки";
});

main.blockSelectionProjectLarge.addEventListener("click", (event)=> {
    main.largeBlockProjectActive = true;
    lib.addClass(event, "size-block-selection--focus");
    for (let item of main.blockSelectionProjectSmall.children) {
        lib.removeClass(item, "size-block-selection--focus");
    }
    main.displayProjectBlocks();
    main.blockListProject.scrollTop = 0;
    main.sizeBlockSelectionTitleRight.textContent = "Большие блоки";
});

main.blockSelectionProjectSmall.addEventListener("click", ()=> {
    main.largeBlockProjectActive = false;
    lib.removeClass(main.blockSelectionProjectLarge, "size-block-selection--focus");
    for (let item of main.blockSelectionProjectSmall.children) {
        lib.addClass(item, "size-block-selection--focus");
    }
    main.displayProjectBlocks();
    main.blockListProject.scrollTop = 0;
    main.sizeBlockSelectionTitleRight.textContent = "Малые блоки";
});
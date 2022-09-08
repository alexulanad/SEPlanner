// реализовать каждый визуальный компонент программы как отдельный, независимый модуль, напримен:
// модуль отвечающий за вывод блоков категории - это объект, который создается при нажатии на категорию,
// в конструкторе указать массив содержащий все блоки категории, а методы объекта- это работа с отдельным блоком
// модуль отвечающий, за блоки проекта - это объект, а его методы позволяют добавлять или удалять блоки и работать с ними
"use strict";

const settingsApp = {
    categoryKeyTarget: "energySources",
    largeBlockCategoryActive: false,
    largeBlockProjectActive: false,
};

const categoryBlockSizeSwitcher = {

};

const main = {
    categoryKeyTarget: "energySources",
    largeBlockCategoryActive: false,
    largeBlockProjectActive: false,
    projectBlocks: [],
    itemCategoryActive: {
        largeBlockIndexActive: null,
        smallBlockIndexActive: null,
    },

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
    categoryTitleSelected: document.querySelector('#category-title-selected'),
    blockListCategory: document.querySelector('#block-list-category'),
    blockListProject: document.querySelector('#block-list-project'),

    launchApp() {
        this.setFocusCategory();
        this.setFocusBlockSizeSwitchLeft();
        this.setFocusBlockSizeSwitchRight();
        this.setTitleBlockSizeSwitch();
        this.addEventForCategories();
        this.addEventForBlockSizeSwitches();
        this.displayCategoryBlocks();
    },

    //Устанавливает фокус на выбранную категорию
    setFocusCategory() {
        const categoryElement = document.querySelector(`[data-category-key=${this.categoryKeyTarget}`);
        categoryElement.classList.add("block-image--focus");
        this.categoryTitleSelected.textContent = categoryElement.dataset.categoryName;
    },

    // Устанавливает фокус на левом переключателе выбора размера блоков
    setFocusBlockSizeSwitchLeft() {
        if (this.largeBlockCategoryActive === true) {
            document.querySelector('#block-selection-category-large').classList.add("size-block-selection--focus");
            for (let item of document.querySelector('#block-selection-category-small').children) {
                item.classList.remove("size-block-selection--focus");
            }
        } else {
            document.querySelector('#block-selection-category-large').classList.remove("size-block-selection--focus");
            for (let item of document.querySelector('#block-selection-category-small').children) {
                item.classList.add("size-block-selection--focus");
            }
        }
    },

    // Устанавливает фокус на правом переключателе выбора размера блоков
    setFocusBlockSizeSwitchRight() {
        if (this.largeBlockProjectActive === true) {
            document.querySelector('#block-selection-project-large').classList.add("size-block-selection--focus");
            for (let item of document.querySelector('#block-selection-project-small').children) {
                item.classList.remove("size-block-selection--focus");
            }
        } else {
            document.querySelector('#block-selection-project-large').classList.remove("size-block-selection--focus");
            for (let item of document.querySelector('#block-selection-project-small').children) {
                item.classList.add("size-block-selection--focus");
            }
        }
    },

    // Устанавливает подпись для переключателей размера блока, согласно выбранному
    setTitleBlockSizeSwitch() {
        this.largeBlockCategoryActive == true ? (this.sizeBlockSelectionTitleleft.textContent = "Большие блоки") : (this.sizeBlockSelectionTitleleft.textContent = "Малые блоки");
        this.largeBlockProjectActive == true ? (this.sizeBlockSelectionTitleRight.textContent = "Большие блоки") : (this.sizeBlockSelectionTitleRight.textContent = "Малые блоки");
    },

    // функция возвращает ссылку на массив: либо больших, либо малых блоков, согласно ключу categoryKeyTarget
    blockArrayDefinition() {
        return main.largeBlockCategoryActive == true ? blockCategories[this.categoryKeyTarget].large : blockCategories[this.categoryKeyTarget].small;
    },
    // Инициализация событий для категорий
    addEventForCategories() {
        for (let item of main.categories.children) {
            item.addEventListener("mouseover", (event) => {
                main.categoryTitle.textContent = item.dataset.categoryName;
            }, false);

            item.addEventListener("mouseout", (event) => {
                main.categoryTitle.textContent = "";
            }, false);

            item.addEventListener("click", () => {
                item.classList.add("block-image--focus");
                main.categoryTitleSelected.textContent = item.dataset.categoryName;
                const categoryName = item.dataset.categoryName;
                for (let item of main.categories.children) {
                    if (item.dataset.categoryName != categoryName) {
                        item.dataset.active = "false";
                        item.classList.remove("block-image--focus");
                    }
                }

                main.itemCategoryActive.largeBlockIndexActive = null;
                main.itemCategoryActive.smallBlockIndexActive = null;

                // Сохраняет ключ категории, для передачи значения функции вывода блоков
                main.categoryKeyTarget = item.dataset.categoryKey;
                // Вызов функции вывода блоков выбранной категории
                main.displayCategoryBlocks();
                // Возвращаем положение скролла в начальную позицию (сохраняет положение при смене категории)
                main.blockListCategory.scrollTop = 0;
            });
        }
    },

    // Инициализация событий для переключателей больших и малых блоков
    addEventForBlockSizeSwitches() {
        main.blockSelectionCategoryLarge.addEventListener("click", (event)=> {
            main.largeBlockCategoryActive = true;
            main.setFocusBlockSizeSwitchLeft();
            main.displayCategoryBlocks();
            main.blockListCategory.scrollTop = 0;
            main.setTitleBlockSizeSwitch();
        });

        main.blockSelectionCategorySmall.addEventListener("click", ()=> {
            main.largeBlockCategoryActive = false;
            main.setFocusBlockSizeSwitchLeft();
            main.displayCategoryBlocks();
            main.blockListCategory.scrollTop = 0;
            main.setTitleBlockSizeSwitch();
        });

        main.blockSelectionProjectLarge.addEventListener("click", (event)=> {
            main.largeBlockProjectActive = true;
            main.setFocusBlockSizeSwitchRight();
            main.displayProjectBlocks();
            main.blockListProject.scrollTop = 0;
            main.setTitleBlockSizeSwitch();
        });

        main.blockSelectionProjectSmall.addEventListener("click", ()=> {
            main.largeBlockProjectActive = false;
            main.setFocusBlockSizeSwitchRight();
            main.displayProjectBlocks();
            main.blockListProject.scrollTop = 0;
            main.setTitleBlockSizeSwitch();
        });
    },

    // функция для отображения блоков из выбранной категории на экране
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
        this.scrollCheck(this.blockListCategory);
    },

    // функция добаления событий для блоков выбранной категории
    addEvent(categoryBlocks) {
        for (let item of main.blockListCategory.children) {
            const buttonIcon = item.querySelector(".button-icon");
            const buttonIconSvg = item.querySelector(".button-icon__svg");
            const blockItemBase = item.querySelector(".block-item__base");
            const blockItemSpecification = item.querySelector(".block-item__specification");

            blockItemBase.addEventListener("mousedown", (e)=> {
                if (e.currentTarget == e.target) {
                    if (blockItemSpecification.style.maxHeight) {
                        blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                        blockItemSpecification.style.maxHeight = null;
                        if (main.largeBlockCategoryActive === true) {
                            this.itemCategoryActive.largeBlockIndexActive = null;
                        } else {
                            this.itemCategoryActive.smallBlockIndexActive = null;
                        }
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
                            this.itemCategoryActive.largeBlockIndexActive = buttonIcon.dataset.blockId;
                        } else {
                            this.itemCategoryActive.smallBlockIndexActive = buttonIcon.dataset.blockId;
                        }
                    }
                }
            }, true);

            if (main.largeBlockCategoryActive === true) {
                if (this.itemCategoryActive.largeBlockIndexActive != null && buttonIcon.dataset.blockId === this.itemCategoryActive.largeBlockIndexActive) {
                    blockItemSpecification.style.transition = "none";
                    blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
                }
            } else {
                if (this.itemCategoryActive.smallBlockIndexActive != null && buttonIcon.dataset.blockId === this.itemCategoryActive.smallBlockIndexActive) {
                    blockItemSpecification.style.transition = "none";
                    blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
                }
            }

            buttonIcon.addEventListener("mouseleave", () => {
                buttonIconSvg.classList.remove("button-icon__svg--click");
            });

            buttonIcon.addEventListener("mousedown", ()=> {
                buttonIconSvg.classList.add("button-icon__svg--click");
            });

            buttonIcon.addEventListener("mouseup", ()=> {
                buttonIconSvg.classList.remove("button-icon__svg--click");
                const createProjectBlock = new CreateProjectBlock(categoryBlocks[buttonIcon.dataset.blockId], (main.largeBlockCategoryActive === true) ? true : false, 1, false);
                this.projectBlocks.push(createProjectBlock);
                this.displayProjectBlocks();
            });
        }
    },

    // функция добавления отступа справа для каждого блока категории, при условии наличия скролла
    scrollCheck(blockList) {
    // проверяем реальную ширину offset* элемента и фактическую client* (без учета ширины scroll-а)
        if (blockList.offsetWidth > blockList.clientWidth) {
            blockList.querySelectorAll('.block-item').forEach(item => {
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
        this.scrollCheck(this.blockListProject);
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
            const blockItemBase = item.querySelector(".block-item__base");
            const blockItemSpecification = item.querySelector(".block-item__specification");

            buttonIcon.addEventListener("mouseleave", () => {
                buttonIconSvg.classList.remove("button-icon__svg--click");
            });

            buttonIcon.addEventListener("mousedown", ()=> {
                buttonIconSvg.classList.add("button-icon__svg--click");
            });

            buttonIcon.addEventListener("mouseup", (event)=> {
                buttonIconSvg.classList.remove("button-icon__svg--click");
                main.projectBlocks.splice(event.currentTarget.dataset.blockId, 1);
                this.displayProjectBlocks();
            });

            blockItemBase.addEventListener("mousedown", (e)=> {
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

main.launchApp();
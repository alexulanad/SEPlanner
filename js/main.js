// Сделать, чтобы scroll у блоков проекта, не обнулялся, при добавлении блока из категории, если скролл проекта сдвинут
// Сделать, чтобы при добавлении блока категории в проект, список блоков проекта не обновлялся каждый раз, а просто добавлялся новый (решение для предыдущего задания?)
import {blocks} from "./blocks.js";

"use strict";
const $lib = {
    dropDown(elem, transition = "0.0") {
        if (elem.style.maxHeight) {
            elem.style.transition = `max-height ${transition}s ease-out`;
            elem.style.maxHeight = "";
        } else {
            elem.style.transition = `max-height ${transition}s ease-out`;
            elem.style.maxHeight = elem.scrollHeight + "px";
        }
    }
};

const main = {
    categoryKeyTarget: "landingGear", //landingGear energySources
    largeBlockCategoryActive: true,
    largeBlockProjectActive: false,
    categoryLargeBlock: {index: null},
    categorySmallBlock: {index: null},
    projectLargeBlock: {index: null},
    projectSmallBlock: {index: null},
    projectBlocks: [],

    launchApp() {
        categories.setFocus();
        categories.addEvent();
        blockSizeSwitchCategory.setFocus();
        blockSizeSwitchCategory.setTitle();
        blockSizeSwitchCategory.addEvent();
        blockSizeSwitchProject.setFocus();
        blockSizeSwitchProject.setTitle();
        blockSizeSwitchProject.addEvent();
        new CategoryBlocks().displayBlocks();
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

const categories = {
    categories: document.querySelector('#categories'),
    categoryTitle: document.querySelector('#category-title'),
    categoryTitleSelected: document.querySelector('#category-title-selected'),

    //Устанавливает фокус на выбранную категорию
    setFocus() {
        const categoryFocus = document.querySelector(`[data-category-key=${main.categoryKeyTarget}`);
        categoryFocus.classList.toggle("block-image--focus");
        this.categoryTitleSelected.textContent = categoryFocus.dataset.categoryName;
    },

    // Инициализация событий для категорий
    addEvent() {
        for (let item of this.categories.children) {
            item.addEventListener("mouseover", () => {
                this.categoryTitle.textContent = item.dataset.categoryName;
            });
            item.addEventListener("mouseout", () => {
                this.categoryTitle.textContent = "";
            });
            item.addEventListener("click", () => {
                this.setFocus();
                main.categoryKeyTarget = item.dataset.categoryKey;
                this.setFocus();
                // Обнуляет запись об развернутых блоках с дополнительной информацией
                main.categoryLargeBlock.index = null;
                main.categorySmallBlock.index = null;
                new CategoryBlocks().displayBlocks();
            });
        }
    },
};

const blockSizeSwitchCategory = {
    // Устанавливает фокус на выбранном переключателе размера блоков
    setFocus() {
        if (main.largeBlockCategoryActive === true) {
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
    // Устанавливает заголовок для переключателей размера блока, согласно выбранному
    setTitle() {
        const title = document.querySelector('#size-block-selection__title--left');
        main.largeBlockCategoryActive == true ? (title.textContent = "Большие блоки") : (title.textContent = "Малые блоки");
    },
    // Устанавливает события для переключателей размера блоков
    addEvent() {
        document.querySelector('#block-selection-category-large').addEventListener("click", ()=> {
            main.largeBlockCategoryActive = true;
            this.setFocus();
            this.setTitle();
            new CategoryBlocks().displayBlocks();
        });
        document.querySelector('#block-selection-category-small').addEventListener("click", ()=> {
            main.largeBlockCategoryActive = false;
            this.setFocus();
            this.setTitle();
            new CategoryBlocks().displayBlocks();
        });
    },
};

const blockSizeSwitchProject = {
    // Устанавливает фокус на выбранном переключателе размера блоков
    setFocus() {
        if (main.largeBlockProjectActive === true) {
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
    // Устанавливает заголовок для переключателей размера блока, согласно выбранному
    setTitle() {
        const title = document.querySelector('#size-block-selection__title--right');
        main.largeBlockProjectActive == true ? (title.textContent = "Большие блоки") : (title.textContent = "Малые блоки");
    },
    // Устанавливает события для переключателей размера блоков
    addEvent() {
        document.querySelector('#block-selection-project-large').addEventListener("click", ()=> {
            main.largeBlockProjectActive = true;
            this.setFocus();
            this.setTitle();
            projectBlocks.displayBlocks();
        });
        document.querySelector('#block-selection-project-small').addEventListener("click", ()=> {
            main.largeBlockProjectActive = false;
            this.setFocus();
            this.setTitle();
            projectBlocks.displayBlocks();
        });
    },
};

class CategoryBlocks {
    constructor() {
        this.blockList = document.querySelector('#block-list-category');
        this.listType = "category";
        this.blocks = main.largeBlockCategoryActive == true ? blocks[main.categoryKeyTarget].large : blocks[main.categoryKeyTarget].small;
    }
    displayBlocks() {
        this.blockList.innerHTML = "";
        if (this.blocks.length != 0) {
            this.blocks.forEach((item, index) => {
                this.blockList.innerHTML += `
                <div class="block-item">
                    <div class="block-item__base">
                        <img class="block-image--ss" src="img/blocks/${item.img}">
                        <span class="block-item__name">${item.title.ru}</span>
                        <div class="button-icon">
                            <svg class="button-icon__svg" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="button-icon__svg-path" d="M19 15V12H17V15H14V17H17V20H19V17H22V15H19ZM2 7H15V9H2V7ZM2 11H15V13H2V11ZM2 15H12V17H2V15Z" fill="rgb(174, 194, 204, 0.9)"/>
                            </svg>
                        </div>
                    </div>
                    <div class="block-item__specification" data-block-id="${index}">
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
        if (this.blockList.innerHTML != "") {this.blockList.lastElementChild.style.marginBottom = 0;}
        this.addEvent();
        this.scrollCheck(this.blockList);
        this.openBlockIndex();
        // Возвращаем положение скролла в начальную позицию (сохраняет положение при смене категории)
        this.blockList.scrollTop = 0;
    }
    // функция добаления событий для блоков выбранной категории
    addEvent() {
        for (let item of this.blockList.children) {
            const buttonIcon = item.querySelector(".button-icon");
            const buttonIconSvg = item.querySelector(".button-icon__svg");
            const blockItemBase = item.querySelector(".block-item__base");
            const specification = item.querySelector(".block-item__specification");

            blockItemBase.addEventListener("mousedown", (e)=> {
                if (e.currentTarget == e.target) {
                    // Раскрывает дополнительную информацию о блоке, сворачивает предыдущий раскрытый блок, сворачивает раскрытый блок, сохраняет индекс раскрытого блока
                    if (this.returnBlockIndex().index === null) {
                        this.returnBlockIndex().index = specification.dataset.blockId;
                        $lib.dropDown(specification, 0.2);
                    } else if (this.returnBlockIndex().index !== null && this.returnBlockIndex().index === specification.dataset.blockId) {
                        this.returnBlockIndex().index = null;
                        $lib.dropDown(specification, 0.2);
                    } else if (this.returnBlockIndex().index !== null && this.returnBlockIndex().index !== specification.dataset.blockId) {
                        $lib.dropDown(this.blockList.querySelector(`[data-block-id="${this.returnBlockIndex().index}"]`), 0.2);
                        this.returnBlockIndex().index = specification.dataset.blockId;
                        $lib.dropDown(specification, 0.2);
                    }
                }
            });

            buttonIcon.addEventListener("mouseleave", () => {
                buttonIconSvg.classList.remove("button-icon__svg--click");
            });

            buttonIcon.addEventListener("mousedown", () => {
                buttonIconSvg.classList.add("button-icon__svg--click");
            });

            //Добавляет блок в массив блоков проекта, запускает метод отображения блоков данного массива из списка блоков проекта
            buttonIcon.addEventListener("mouseup", () => {
                buttonIconSvg.classList.remove("button-icon__svg--click");
                const createProjectBlock = new CreateProjectBlock(this.blocks[specification.dataset.blockId], (main.largeBlockCategoryActive === true) ? true : false, 1, false);
                main.projectBlocks.push(createProjectBlock);
                projectBlocks.displayBlocks();
            });
        }
    }
    // Возвращает индекс блока, учитывая назначение списка блоков, а так же активный переключатель размера блоков
    returnBlockIndex() {
        if (this.listType === "category" && main.largeBlockCategoryActive === true) {return main.categoryLargeBlock;}
        else if (this.listType === "category" && main.largeBlockCategoryActive === false) {return main.categorySmallBlock;}
        else if (this.listType === "project" && main.largeBlockProjectActive === true) {return main.projectLargeBlock;}
        else if (this.listType === "project" && main.largeBlockProjectActive === false) {return main.projectSmallBlock;}

    }
    // Раскрывает раннее развернутый блок в списке
    openBlockIndex() {
        if (this.returnBlockIndex().index !== null) {
            $lib.dropDown(this.blockList.querySelector(`[data-block-id="${this.returnBlockIndex().index}"]`), 0.0);
        }
    }
    // Метод добавляет отступ справа для каждого игрового блока, при условии появления скролла
    scrollCheck(blockList) {
        // проверяем реальную ширину offset* элемента и фактическую client* (без учета ширины scroll-а)
        if (blockList.offsetWidth > blockList.clientWidth) {
            blockList.querySelectorAll('.block-item').forEach(item => {
                item.style.marginRight = "4px";
            });
        }
    }
}

const projectBlocks = {
    blockList: document.querySelector('#block-list-project'),

    // Функция сортировки блоков проекта из массива projectBlocks, по критерию: большие, малые, и дальнейший вызов функции отображения блоков
    displayBlocks() {
        this.blockList.innerHTML = "";
        if (main.projectBlocks.length != 0) {
            if (main.largeBlockProjectActive === true) {
                main.projectBlocks.filter(function (item, index) {
                    if (item.largeBlock === true) {
                        projectBlocks.addBlock(item, index);
                    }
                });
            } else {
                main.projectBlocks.filter(function (item, index) {
                    if (item.largeBlock !== true) {
                        projectBlocks.addBlock(item, index);
                    }
                });
            }
        }
        // Удаляем лишний нижний отступ у последнего отображенного блока
        if (this.blockList.innerHTML != "") {
            this.blockList.lastElementChild.style.marginBottom = 0;
        }
        this.addEvent();
        this.scrollCheck(this.blockList);
    },

    // функция добавления и вывода блоков проекта на экран
    addBlock(item, index) {
        this.blockList.innerHTML += `
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
        document.querySelector('#block-list-project').scrollTop = 0;
    },
    // функция добавления событий для блоков проекта
    addEvent() {
        for (let item of this.blockList.children) {
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
                this.displayBlocks();
            });

            blockItemBase.addEventListener("mousedown", (e)=> {
                if (e.currentTarget == e.target) {
                    if (blockItemSpecification.style.maxHeight) {
                        blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                        blockItemSpecification.style.maxHeight = null;
                        main.projectBlocks[buttonIcon.dataset.blockId].active = false;
                    } else {
                        for (let item of this.blockList.children) {
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
    // Метод добавляет отступ справа для каждого игрового блока, при условии появления скролла
    scrollCheck(blockList) {
        // проверяем реальную ширину offset* элемента и фактическую client* (без учета ширины scroll-а)
        if (blockList.offsetWidth > blockList.clientWidth) {
            blockList.querySelectorAll('.block-item').forEach(item => {
                item.style.marginRight = "4px";
            });
        }
    },
};

main.launchApp();
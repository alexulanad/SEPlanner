// реализовать каждый визуальный компонент программы как отдельный, независимый модуль, напримен:
// модуль отвечающий за вывод блоков категории - это объект, который создается при нажатии на категорию,
// в конструкторе указать массив содержащий все блоки категории, а методы объекта- это работа с отдельным блоком
// модуль отвечающий, за блоки проекта - это объект, а его методы позволяют добавлять или удалять блоки и работать с ними
"use strict";

const main = {
    categoryKeyTarget: "energySources", //landingGear energySources
    largeBlockCategoryActive: true,
    largeBlockProjectActive: false,
    projectBlocks: [],

    // itemCategoryActive: {
    //     largeBlockIndexActive: null,
    //     smallBlockIndexActive: null,
    // },

    // blockListCategory: document.querySelector('#block-list-category'),
    // blockListProject: document.querySelector('#block-list-project'),

    launchApp() {
        categories.setFocus();
        categories.addEvent();
        blockSizeSwitchCategory.setFocus();
        blockSizeSwitchCategory.setTitle();
        blockSizeSwitchCategory.addEvent();
        blockSizeSwitchProject.setFocus();
        blockSizeSwitchProject.setTitle();
        blockSizeSwitchProject.addEvent();
        categoryBlocks.displayBlocks();
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
                categoryBlocks.displayBlocks();
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
            categoryBlocks.displayBlocks();
        });
        document.querySelector('#block-selection-category-small').addEventListener("click", ()=> {
            main.largeBlockCategoryActive = false;
            this.setFocus();
            this.setTitle();
            categoryBlocks.displayBlocks();
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

const categoryBlocks = {
    // blocks =  main.largeBlockCategoryActive == true ? blocks[main.categoryKeyTarget].large : blocks[main.categoryKeyTarget].small;
    blockList: document.querySelector('#block-list-category'),
    largeBlockIndexActive: null,
    smallBlockIndexActive: null,        // this.blockList = document.querySelector('#block-list-category');

    // функция возвращает ссылку на массив: либо больших, либо малых блоков, согласно ключу categoryKeyTarget
    blockArrayDefinition() {
        // запихать эту строку прямл в display
        return main.largeBlockCategoryActive == true ? blocks[main.categoryKeyTarget].large : blocks[main.categoryKeyTarget].small;
    },
    // функция для вывода блоков из выбранной категории на экране
    displayBlocks() {
        this.blockList.innerHTML = "";
        const categoryBlocks = this.blockArrayDefinition();
        if (categoryBlocks.length != 0) {
            categoryBlocks.forEach((item, index) => {
                this.blockList.innerHTML += `
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
        // Обнуляет запись об развернутых блоках с дополнительной информацией
        // this.largeBlockIndexActive = null;
        // this.smallBlockIndexActive = null;

        //Убирает лишний нижний отступ у последнего элемента в массиве
        if (this.blockList.innerHTML != "") {
            this.blockList.lastElementChild.style.marginBottom = 0;
        }
        this.addEvent(categoryBlocks);
        main.scrollCheck(this.blockList);
        // Возвращаем положение скролла в начальную позицию (сохраняет положение при смене категории)
        this.blockList.scrollTop = 0;
    },

    // функция добаления событий для блоков выбранной категории
    addEvent(categoryBlocks) {
        for (let item of this.blockList.children) {
            const buttonIcon = item.querySelector(".button-icon");
            const buttonIconSvg = item.querySelector(".button-icon__svg");
            const blockItemBase = item.querySelector(".block-item__base");
            const blockItemSpecification = item.querySelector(".block-item__specification");

            blockItemBase.addEventListener("mousedown", (e)=> {
                if (e.currentTarget == e.target) {
                    // если блок раскрыт, сворачивает его и очищает переменную с индексом
                    if (blockItemSpecification.style.maxHeight) {
                        blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                        blockItemSpecification.style.maxHeight = null;
                        if (main.largeBlockCategoryActive === true) {
                            this.largeBlockIndexActive = null;
                        } else {
                            this.smallBlockIndexActive = null;
                        }
                    // если блок закрыт, раскрывает его и сворачивает все остальные, если они открыты
                    } else {
                        // перебирает все блоки, если есть блок ранее раскрытый - сворачивает его
                        for (let item of this.blockList.children) {
                            const blockItemSpecification = item.querySelector(".block-item__specification");
                            // const itemMaxHeight = item.querySelector(".block-item__specification");
                            if (blockItemSpecification.style.maxHeight) {
                                blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                                blockItemSpecification.style.maxHeight = null;
                                // itemMaxHeight.style.maxHeight = null;
                            }
                        }
                        // раскрывает блок, добавляет индекс блока в переменную
                        blockItemSpecification.style.transition = "max-height 0.2s ease-out";
                        blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
                        if (main.largeBlockCategoryActive === true) {
                            this.largeBlockIndexActive = buttonIcon.dataset.blockId;
                        } else {
                            this.smallBlockIndexActive = buttonIcon.dataset.blockId;
                        }
                    }
                }
            }, true);

            // Проверяет блок на раскрытие, если сохраненный индек совпадает с индексом блока, то раскрывает его (без анимации)
            if (main.largeBlockCategoryActive === true) {
                if (this.largeBlockIndexActive != null && buttonIcon.dataset.blockId === this.largeBlockIndexActive) {
                    blockItemSpecification.style.transition = "none";
                    blockItemSpecification.style.maxHeight = blockItemSpecification.scrollHeight + "px";
                }
            } else {
                if (this.smallBlockIndexActive != null && buttonIcon.dataset.blockId === this.smallBlockIndexActive) {
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
                main.projectBlocks.push(createProjectBlock);
                projectBlocks.displayBlocks();
            });
        }
    },
};

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
        main.scrollCheck(this.blockList);
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
};

main.launchApp();
// сделать переключатели через класс, с наследованием
// подумать (и сделать) как собрать html для кадлого блока по кусочкам, учитывая наследование
// Сделать, чтобы scroll у блоков проекта, не обнулялся, при добавлении блока из категории, если скролл проекта сдвинут
// Сделать, чтобы при добавлении блока категории в проект, список блоков проекта не обновлялся каждый раз, а просто добавлялся новый (решение для предыдущего задания?)
import {blocks} from "./blocks.js";

"use strict";

// метод открывает или сворачивает переданный элемент, принимает сам элемент и скорость выполнения.
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
    categoryKeyTarget: "energySources", //landingGear energySources
    largeBlocksCategory: {active: true},
    largeBlocksProject: {active: true},
    categoryLargeDropDownBlock: {index: null},
    categorySmallDropDownBlock: {index: null},
    projectLargeDropDownBlock: {index: null},
    projectSmallDropDownBlock: {index: null},
    projectBlocks: {large: [], small: []},
};

class CreateProjectBlock {
    constructor(block) {
        this.block = block; // ссылка на блок в массиве списка блоков (в зависимсости от размера и выбранной категории)
        this.amount = 1; // количество блоков данного типа
    }
}
// Объект отвечает за назначение событий для иконок выбора категории блоков, а так же за установку визуального фокуса на выбранной категории
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
                main.categoryLargeDropDownBlock.index = null;
                main.categorySmallDropDownBlock.index = null;
                new CategoryBlocks().display();
            });
        }
    },
};

// Класс отвечает за переключатель размера блоков выбранной категории
class CategoryBlockSizeSwitcher {
    constructor() {
        this.largeBlocks = main.largeBlocksCategory;
        this.blocks = CategoryBlocks;
        this.largeBlockSwitcher = document.querySelector('#block-selection-category-large');
        this.smallBlockSwitcher = document.querySelector('#block-selection-category-small');
        this.blockSizeSwitcherTitle = document.querySelector('#size-block-selection__title--left');
    }
    // Устанавливает фокус на выбранном переключателе размера блоков
    setFocus() {
        if (this.largeBlocks.active === true) {
            this.largeBlockSwitcher.classList.add("size-block-selection--focus");
            for (let item of this.smallBlockSwitcher.children) {
                item.classList.remove("size-block-selection--focus");
            }
        } else {
            this.largeBlockSwitcher.classList.remove("size-block-selection--focus");
            for (let item of this.smallBlockSwitcher.children) {
                item.classList.add("size-block-selection--focus");
            }
        }
        return this;
    }
    // Устанавливает заголовок для переключателей размера блока, согласно выбранному
    setTitle() {
        this.largeBlocks.active === true ? (this.blockSizeSwitcherTitle.textContent = "Большие блоки") : (this.blockSizeSwitcherTitle.textContent = "Малые блоки");
        return this;
    }
    // назначает события на переключатели выбора размера блоков
    addEvent() {
        this.largeBlockSwitcher.addEventListener("click", ()=> {
            this.largeBlocks.active = true;
            this.setFocus();
            this.setTitle();
            new this.blocks().display();
        });
        this.smallBlockSwitcher.addEventListener("click", ()=> {
            this.largeBlocks.active = false;
            this.setFocus();
            this.setTitle();
            new this.blocks().display();
        });
    }
}

//Класс отвечает за переключатель выбора размера блоков проекта, наследует методы класса переключателя размера блоков категории
class ProjectBlockSizeSwitcher extends CategoryBlockSizeSwitcher {
    constructor() {
        super();
        this.largeBlocks = main.largeBlocksProject;
        this.blocks = ProjectBlocks;
        this.largeBlockSwitcher = document.querySelector('#block-selection-project-large');
        this.smallBlockSwitcher = document.querySelector('#block-selection-project-small');
        this.blockSizeSwitcherTitle = document.querySelector('#size-block-selection__title--right');
    }
}
//Класс выводит блоки категории на экран, назначает события
class CategoryBlocks {
    constructor() {
        this.blockList = document.querySelector('#block-list-category');
        this.blocks = main.largeBlocksCategory.active == true ? blocks[main.categoryKeyTarget].large : blocks[main.categoryKeyTarget].small;
        this.projectBlocksList = main.largeBlocksCategory.active == true ? main.projectBlocks.large : main.projectBlocks.small;
        this.dropDownBlock = main.largeBlocksCategory.active === true ? main.categoryLargeDropDownBlock : main.categorySmallDropDownBlock;
    }
    // Общий метод, запускает все необходимые методы созданного объекта
    display() {
        this.addBlock().removePaddingBottom().addPaddingRightWhenScrolling().openBlockIndex().addEvent();
    }
    // Индивидуальный метод объекта категории. Формирует html для каждого из блоков выбранной категории
    addBlock() {
        this.blockList.innerHTML = "";
        if (this.blocks.length != 0) {
            this.blocks.forEach((item, index) => {
                this.templateBlock(item.title.ru, item.weight, item.integrity, item.img, item.description, index);
                this.templateButtonAddBlockToProject();
            });
        }
        // Возвращаем положение скролла в начальную позицию (сохраняет положение при смене категории)
        this.blockList.scrollTop = 0;
        return this;
    }
    // Для каждого блока категории или проекта формирует общий html-каркас с общими данными
    templateBlock(title, weight, integrity, img, description, index) {
        this.blockList.innerHTML += `
            <div class="block-item">
                <div class="block-item__base">
                    <img class="block-image--ss" src="img/blocks/${img}">
                    <span class="block-item__name">${title}</span>
                </div>
                <div class="block-item__specification" data-block-id="${index}">
                    <div class="block-item__image-block">
                        <img class="block-image--bs" src="img/blocks/${img}">
                    </div>
                    <div class="block-item__specification-block">
                        <div class="block-item__content-block">
                            <div class="block-item__content-title">Описание</div>
                            <div class="block-item__content-description">${description}</div>
                        </div>
                        <div class="block-item__content-block">
                            <div class="block-item__content-title">Характеристики</div>
                            <div class="block-item__content-item">
                                <span class="block-item__content-item-title">Масса</span>
                                <span class="block-item__content-item-value">${weight}</span>
                                <span class="block-item__content-item-value-unit">кг.</span>
                            </div>
                            <div class="block-item__content-item">
                                <span class="block-item__content-item-title">Прочность</span>
                                <span class="block-item__content-item-value">${integrity}</span>
                                <span class="block-item__content-item-value-unit">ед.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return this;
    }
    // Индивидуальный метод объекта категории. Добавляет в общий html-каркас блока html-код кнопки добавления блока в проект
    templateButtonAddBlockToProject() {
        const lastAddedBlock = this.blockList.lastElementChild.querySelector(".block-item__base");
        lastAddedBlock.insertAdjacentHTML('beforeend', `
            <div class="button-icon">
                <svg class="button-icon__svg" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="button-icon__svg-path" d="M19 15V12H17V15H14V17H17V20H19V17H22V15H19ZM2 7H15V9H2V7ZM2 11H15V13H2V11ZM2 15H12V17H2V15Z" fill="rgb(174, 194, 204, 0.9)"/>
                </svg>
            </div>`
        );
        return this;
    }
    //Убирает лишний нижний отступ у последнего элемента в массиве
    removePaddingBottom() {
        if (this.blockList.innerHTML != "") {this.blockList.lastElementChild.style.marginBottom = 0;}
        return this;
    }
    // Метод добавляет отступ справа для каждого игрового блока, при условии появления скролла
    addPaddingRightWhenScrolling() {
        // проверяем реальную ширину offset* элемента и фактическую client* (без учета ширины scroll-а)
        if (this.blockList.offsetWidth > this.blockList.clientWidth) {
            this.blockList.querySelectorAll('.block-item').forEach(item => {item.style.marginRight = "4px";});
        }
        return this;
    }
    // Раскрывает раннее развернутый блок в списке
    openBlockIndex() {
        if (this.dropDownBlock.index !== null) {
            $lib.dropDown(this.blockList.querySelector(`[data-block-id="${this.dropDownBlock.index}"]`), 0.0);
        }
        return this;
    }
    // Индивидуальный метод объекта категории. Формирует перечень событий для блоков выбранной категории
    addEvent() {
        for (let item of this.blockList.children) {
            const buttonAddBlock = item.querySelector(".button-icon");
            const buttonAddBlockSvg = item.querySelector(".button-icon__svg");
            const blockId = item.querySelector(".block-item__specification").dataset.blockId;

            this.addEventDropDownBlock(item);
            this.addEventButtonLeaveAndDown(buttonAddBlock, buttonAddBlockSvg);
            this.addEventButtonAddBlockClick(buttonAddBlock, buttonAddBlockSvg, blockId);
        }
        return this;
    }
    // Наследуемый метод. Добавляет логику открытия, сворачивания, проверки на "уже открыт" и "уже есть открыт", для выпадающих блоков.
    addEventDropDownBlock(item) {
        const block = item.querySelector(".block-item__base");
        const specification = item.querySelector(".block-item__specification");
        block.addEventListener("mousedown", (e)=> {
            if (e.currentTarget == e.target) {
                // Раскрывает дополнительную информацию о блоке, сворачивает предыдущий раскрытый блок, сворачивает раскрытый блок, сохраняет индекс раскрытого блока
                if (this.dropDownBlock.index === null) {
                    this.dropDownBlock.index = specification.dataset.blockId;
                    $lib.dropDown(specification, 0.2);
                } else if (this.dropDownBlock.index !== null && this.dropDownBlock.index === specification.dataset.blockId) {
                    this.dropDownBlock.index = null;
                    $lib.dropDown(specification, 0.2);
                } else if (this.dropDownBlock.index !== null && this.dropDownBlock.index !== specification.dataset.blockId) {
                    $lib.dropDown(this.blockList.querySelector(`[data-block-id="${this.dropDownBlock.index}"]`), 0.2);
                    this.dropDownBlock.index = specification.dataset.blockId;
                    $lib.dropDown(specification, 0.2);
                }
            }
        });
    }
    // Наследуемый метод. Меняет стиль кнопок для блоков категории и проекта, при нажатии и уходе с фокуса кнопки.
    addEventButtonLeaveAndDown(button, buttonSvg) {
        button.addEventListener("mouseleave", () => {buttonSvg.classList.remove("button-icon__svg--click");});
        button.addEventListener("mousedown", () => {buttonSvg.classList.add("button-icon__svg--click");});
    }
    //Добавляет игровой блок в массив для больших или мылых блоков проекта.
    addEventButtonAddBlockClick(button, buttonSvg, blockId) {
        button.addEventListener("mouseup", () => {
            buttonSvg.classList.remove("button-icon__svg--click");
            const newBlock = new CreateProjectBlock(this.blocks[blockId]);
            this.projectBlocksList.push(newBlock);
            // this.projectBlocks.push(new CreateProjectBlock(this.blocks[blockId], 1));
            if (main.largeBlocksCategory.active !== main.largeBlocksProject.active) {
                main.largeBlocksProject.active = main.largeBlocksCategory.active;
                new ProjectBlockSizeSwitcher().setFocus().setTitle();
                new ProjectBlocks().display();
            } else {
                // const blockListProject = document.querySelector('#block-list-project');
                console.log(newBlock);
                console.log(main.largeBlocksCategory.active, main.largeBlocksProject.active);
                // const block = this.blocks[blockId];
                // console.log(block.title.ru, block.weight, block.integrity, block.img, block.description, blockId);
                const projectBlocks = new ProjectBlocks();
                projectBlocks.templateBlock(newBlock.block.title.ru, newBlock.block.weight, newBlock.block.integrity, newBlock.block.img, newBlock.block.description, blockId)
                projectBlocks.templateButtonRemoveBlockProject(newBlock.amount);
                projectBlocks.removePaddingBottom().addEvent();
                projectBlocks.blockList.lastElementChild.style.marginTop = "4px";
                // if (projectBlocks.blockList.innerHTML != "") {projectBlocks.blockList.lastElementChild.style.marginTop = 4;}
                // new ProjectBlocks().templateButtonRemoveBlockProject(newBlock.amount);
                // this.templateButtonAddBlockToProject(blockListProject,);
                
                // console.log(this.blocks);
            }
        });
    }}
// Класс выводит блоки проекта, добавленные из списка блоков категории, наследует методы класса, отвечающие за блоки категории
class ProjectBlocks extends CategoryBlocks{
    constructor() {
        super();
        this.blockList = document.querySelector('#block-list-project');
        this.blocks = main.largeBlocksProject.active == true ? main.projectBlocks.large : main.projectBlocks.small;
        this.dropDownBlock = main.largeBlocksProject.active === true ? main.projectLargeDropDownBlock : main.projectSmallDropDownBlock;
    }
    // Индивидуальный метод объекта блоков проекта. Формирует html для каждого из добавленных блоков в проект.
    addBlock() {
        this.blockList.innerHTML = "";
        if (this.blocks.length != 0) {
            this.blocks.forEach((item, index) => {
                this.templateBlock(item.block.title.ru, item.block.weight, item.block.integrity, item.block.img, item.block.description, index)
                this.templateButtonRemoveBlockProject(item.amount);
            });
        }
        // Возвращаем положение скролла в начальную позицию (сохраняет положение при смене категории)
        this.blockList.scrollTop = 0;
        return this;
    }
    // Индивидуальный метод объекта блоков проекта. Добавляет в общий html-каркас блока html-код кнопки удаления блока из проекта.
    templateButtonRemoveBlockProject(amount) {
        const lastAddedBlock = this.blockList.lastElementChild.querySelector(".block-item__base");
        lastAddedBlock.insertAdjacentHTML('beforeend', `
            <span class="block-item__name">${amount}</span>
            <div class="button-icon">
                <svg class="button-icon__svg" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-playlist-remove">
                    <path class="button-icon__svg-path" d="M2,6V8H14V6H2M2,10V12H11V10H2M14.17,10.76L12.76,12.17L15.59,15L12.76,17.83L14.17,19.24L17,16.41L19.83,19.24L21.24,17.83L18.41,15L21.24,12.17L19.83,10.76L17,13.59L14.17,10.76M2,14V16H11V14H2Z" fill="rgb(174, 194, 204, 0.9)"/>
                </svg>
            </div>`
        );
    }
    // Индивидуальный метод объекта блоков проекта. Формирует перечень назначаемых событий для блоков данной области.
    addEvent() {
        for (let item of this.blockList.children) {
            const buttonRemoveBlock = item.querySelector(".button-icon");
            const buttonRemoveBlockSvg = item.querySelector(".button-icon__svg");
            const blockId = item.querySelector(".block-item__specification").dataset.blockId;

            this.addEventDropDownBlock(item);
            this.addEventButtonLeaveAndDown(buttonRemoveBlock, buttonRemoveBlockSvg);
            this.addEventButtonRemoveBlockClick(blockId, buttonRemoveBlock, buttonRemoveBlockSvg);
        }
        return this;
    }
    //Удаляет блок из массива больших или малых блоков проекта.
    addEventButtonRemoveBlockClick(blockId, button, buttonSvg) {
        button.addEventListener("mouseup", () => {
            buttonSvg.classList.remove("button-icon__svg--click");
            this.blocks.splice(blockId, 1);
            if (blockId === this.dropDownBlock.index) {this.dropDownBlock.index = null;}
            if (blockId < this.dropDownBlock.index) {this.dropDownBlock.index = String(this.dropDownBlock.index - 1);}
            new ProjectBlocks().display();
        });
    }
}
// основной метод первичного запуска приложения. Запускает основные необходимые процессы для дальнейшей работой и взаимодействия с пользователем.
const launchApp = function () {
    categories.setFocus();
    categories.addEvent();
    new CategoryBlockSizeSwitcher().setFocus().setTitle().addEvent();
    new ProjectBlockSizeSwitcher().setFocus().setTitle().addEvent();
    new CategoryBlocks().display();
    new ProjectBlocks().display();
};

launchApp();
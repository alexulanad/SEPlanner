"use strict";

let largeBlockCategoryActive = true;
let largeBlockProjectActive = true;

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

const displayBlocksCategory = function(categoryKey) {
    blockListCategory.innerHTML = "";
    console.log(categoryKey);
    blockListCategory.innerHTML = "";
};

displayBlocksCategory(categories.firstElementChild.dataset.categoryKey);

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
            item.dataset.active = "true";
            addClass(item, "block-image--focus");
            projectTitle.textContent = item.dataset.categoryName;
            const categoryName = item.dataset.categoryName;
            for (let item of categories.children) {
                if (item.dataset.categoryName != categoryName) {
                    item.dataset.active = "false";
                    removeClass(item, "block-image--focus");
                }
            }
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

blockSelectionSmall.addEventListener("click", (event)=> {
    largeBlockCategoryActive = false;
    removeClass(blockSelectionLarge, "size-block-selection--focus");
    for (let item of blockSelectionSmall.children) {
        addClass(item, "size-block-selection--focus");
    }
}, false);



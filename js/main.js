"use strict";

let largeBlockCategoryActive = true;
let LargeBlockProjectActive = true;
const largeBlockCategory = document.querySelector('#large-block-category');
const smallBlocksCategory = document.querySelector('#small-blocks-category');
let categories = document.querySelector('#categories');
let categoryTitle = document.querySelector('#category-title');

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

for (let item of categories.children) {
    if (item.tagName === "IMG") {
        item.addEventListener("mouseover", (event) => {
            addClass(event, "block-image--hover");
            categoryTitle.textContent = item.dataset.categoryName;
        }, false);

        item.addEventListener("mouseout", (event) => removeClass(event, "block-image--hover"), false);

        item.addEventListener("click", () => {
            item.dataset.active = "true";
            addClass(item, "block-image--focus");
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

largeBlockCategory.addEventListener("mouseover", (event) => {
    addClass(event, "size-selection--hover");
});

largeBlockCategory.addEventListener("mouseout", (event) => {
    removeClass(event, "size-selection--hover");
});

largeBlockCategory.addEventListener("click", (event)=> {
    largeBlockCategoryActive = true;
    addClass(event, "size-selection--focus");
    for (let item of smallBlocksCategory.children) {
        removeClass(item, "size-selection--focus");
    }
});

smallBlocksCategory.addEventListener("mouseover", ()=> {
    for (let item of smallBlocksCategory.children) {
        addClass(item, "size-selection--hover");
    }
});

smallBlocksCategory.addEventListener("mouseout", ()=> {
    for (let item of smallBlocksCategory.children) {
        removeClass(item, "size-selection--hover");
    }
});

smallBlocksCategory.addEventListener("click", (event)=> {
    largeBlockCategoryActive = false;
    removeClass(largeBlockCategory, "size-selection--focus");
    for (let item of smallBlocksCategory.children) {
        addClass(item, "size-selection--focus");
    }
}, false);



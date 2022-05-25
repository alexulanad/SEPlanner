"use strict";

// categories.addEventListener("click", (e) => {
//     if (e.target.tagName === "img") {
//     }
// });

// sizeSelectionCategory
let largeBlockCategoryActive = true;
let LargeBlockProjectActive = true;
const largeBlockCategory = document.querySelector('#large-block-category');
const smallBlocksCategory = document.querySelector('#small-blocks-category');
let categories = document.querySelector('#categories');
let categoryTitle = document.querySelector('#category-title');

// for (let item of categories.children) {
//     if (item.tagName === "IMG") {
//         item.addEventListener("mouseover", (e, categoryName)=> {
//             categoryName.textContent = e.dataset.categoryTitle;
//         });
//         item.addEventListener("mouseout", ()=> {

//         });
//         item.addEventListener("click", ()=> {

//         } );
//     }
// }

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

// for (let item of categories.children) {
// if (item.dataset.active === "true") {
//     console.log(item.dataset.active);
//     addClass(item, "block-image--focus");
// } else {
//     console.log(item.dataset.active);
//     removeClass(item, "block-image--focus");
// }
// }
// addClass(categories.firstElementChild, "block-image--focus");

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

largeBlockCategory.addEventListener("mouseover", ()=> {
    largeBlockCategory.classList.add('size-selection__large-block--hover');
});

largeBlockCategory.addEventListener("mouseout", ()=> {
    largeBlockCategory.classList.remove('size-selection__large-block--hover');
});

largeBlockCategory.addEventListener("click", ()=> {
    largeBlockCategoryActive = true;
    largeBlockCategory.classList.add('size-selection__large-block--focus');
    for (let item of smallBlocksCategory.children) {
        if (item.classList.contains("size-selection__small-block")) {
            item.classList.remove('size-selection__small-block--focus');
        }
    }
    console.log(largeBlockCategoryActive);
});

smallBlocksCategory.addEventListener("mouseover", ()=> {
    for (let item of smallBlocksCategory.children) {
        if (item.classList.contains("size-selection__small-block")) {
            item.classList.add('size-selection__small-block--hover');
        }
    }
});

smallBlocksCategory.addEventListener("mouseout", ()=> {
    for (let item of smallBlocksCategory.children) {
        if (item.classList.contains("size-selection__small-block")) {
            item.classList.remove('size-selection__small-block--hover');
        }
    }
});

smallBlocksCategory.addEventListener("click", ()=> {
    largeBlockCategoryActive = false;
    largeBlockCategory.classList.remove('size-selection__large-block--focus');
    for (let item of smallBlocksCategory.children) {
        if (item.classList.contains("size-selection__small-block")) {
            item.classList.add('size-selection__small-block--focus');
        }
    }
    console.log(largeBlockCategoryActive);
});



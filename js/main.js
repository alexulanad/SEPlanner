"use strict";

// categories.addEventListener("click", (e) => {
//     if (e.target.tagName === "img") {
//     }
// });

// sizeSelectionCategory
let largeBlockCategory = true;
let LargeBlockProject = true;
const largeBlockCategoryView = document.querySelector('#large-block-category');
const smallBlocksCategoryView = document.querySelector('#small-blocks-category');
const categories = document.querySelector('#categories');
const categoryName = document.querySelector('#category-name');
console.dir(categoryName);

// console.log(categories);

for (let item of categories.children) {
    if (item.tagName === "IMG") {
        item.addEventListener("mouseover", ()=> {

        });
        item.addEventListener("mouseout", ()=> {

        });
        item.addEventListener("click", ()=> {

        } );
    }
}

largeBlockCategoryView.addEventListener("mouseover", ()=> {
    largeBlockCategoryView.classList.add('size-selection__large-block--hover');
});

largeBlockCategoryView.addEventListener("mouseout", ()=> {
    largeBlockCategoryView.classList.remove('size-selection__large-block--hover');
});

largeBlockCategoryView.addEventListener("click", ()=> {
    largeBlockCategory = true;
    largeBlockCategoryView.classList.add('size-selection__large-block--focus');
    for (let item of smallBlocksCategoryView.children) {
        if (item.classList.contains("size-selection__small-block")) {
            item.classList.remove('size-selection__small-block--focus');
        }
    }
    console.log(largeBlockCategory);
});

smallBlocksCategoryView.addEventListener("mouseover", ()=> {
    for (let item of smallBlocksCategoryView.children) {
        if (item.classList.contains("size-selection__small-block")) {
            item.classList.add('size-selection__small-block--hover');
        }
    }
});

smallBlocksCategoryView.addEventListener("mouseout", ()=> {
    for (let item of smallBlocksCategoryView.children) {
        if (item.classList.contains("size-selection__small-block")) {
            item.classList.remove('size-selection__small-block--hover');
        }
    }
});

smallBlocksCategoryView.addEventListener("click", ()=> {
    largeBlockCategory = false;
    largeBlockCategoryView.classList.remove('size-selection__large-block--focus');
    for (let item of smallBlocksCategoryView.children) {
        if (item.classList.contains("size-selection__small-block")) {
            item.classList.add('size-selection__small-block--focus');
        }
    }
    console.log(largeBlockCategory);
});



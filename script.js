const mainTitle = document.getElementById('main-title');
mainTitle.textContent = 'DOM Manipulation Practice';

const description = document.getElementById('description');
description.textContent = 'This activity helps you practice DOM manipulation using JavaScript.';

const itemList = document.getElementById('item-list');


const addItemButton = document.getElementById('add-item');

const modifyItemButton = document.getElementById('modify-item');
let itemIndex = 0;

const removeItemButton = document.getElementById('remove-item');

const clearListButton = document.getElementById('clear-items');

addItemButton.addEventListener('click', () => {
    if (itemIndex < items.length) {
        const listItem = document.createElement('li');
        const currentCount = itemList.children.length + 1;
        listItem.textContent = `Item ${currentCount}: ${items[itemIndex]}`;
        itemList.appendChild(listItem);
        itemIndex++;
    }
});

modifyItemButton.addEventListener('click', () => {
    const listItems = itemList.getElementsByTagName('li');
    if (listItems.length > 0) {
        const lastItem = listItems[listItems.length - 1];
        if (!lastItem.textContent.includes(' (Modified)')) {
            lastItem.textContent += ' (Modified)';
        }
    }
});

removeItemButton.addEventListener('click', () => {
    const listItems = itemList.getElementsByTagName('li');
    if (listItems.length > 0) {
        itemList.removeChild(listItems[listItems.length - 1]);
    }
});

clearListButton.addEventListener('click', () => {
    itemList.innerHTML = '';
    itemIndex = 0; // Reset index when list is cleared
});     

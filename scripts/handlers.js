import { Item } from './class.js';
import { updateList } from './dom-update.js';
import { addItemInputElement, searchItemInputElement } from './dom-element.js';
import { createButton } from './element-creator.js';

export const addItemHandler = (event) => {
    const name = addItemInputElement.value;
    addItemInputElement.value = '';
    if(name) {
        const newItem = new Item(name);
        window.itemList.push(newItem);
        updateList();
    }
}

export const searchItemHandler = (event) => {
    const query = searchItemInputElement.value;
    const newItemList = window.itemList.filter(item => item.name.startsWith(query));
    updateList(newItemList);
}

export const closeItemHandler = (event) => {
    searchItemInputElement.value = ''
    updateList();
}

export const removeItemHandler = (event) => {
    const id = event.target.id;
    const itemID = id.split('-')[1];
    window.itemList = window.itemList.filter(item => item.ID !== itemID);
    updateList();
}

export const editItemHandler = (event) => {
    const id = event.target.id;
    const itemID = id.split('-')[1];
    const itemContainerElement = document.querySelector(`#i-${itemID}-item-container`);

    itemContainerElement.removeChild(itemContainerElement.lastChild);
    itemContainerElement.removeChild(itemContainerElement.lastChild);
    itemContainerElement.lastChild.readOnly = false;

    const saveButton = createButton('Save', saveItemHandler, itemID);

    itemContainerElement.append(saveButton);
}

export const saveItemHandler = (event) => {
    const id = event.target.id;
    const itemID = id.split('-')[1];
    const inputElement = document.querySelector(`#i-${itemID}-item-text-area`);
    const newValue = inputElement.value;

    if(newValue) {
        window.itemList = window.itemList.map(item => {
            if(item.ID === itemID) {
                return {...item, name: newValue};
            } else {
                return item;
            }
        })
    }

    updateList();
}

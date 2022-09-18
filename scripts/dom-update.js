import { itemListElement } from "./dom-element.js";
import { createItem } from './element-creator.js';

export const updateList = (itemList = window.itemList) => {
    while (itemListElement.lastChild) {
        itemListElement.removeChild(itemListElement.lastChild);
    }

    itemList.forEach(item => {
        const newItemElement = createItem(item, itemList);
        itemListElement.appendChild(newItemElement);
    });
}
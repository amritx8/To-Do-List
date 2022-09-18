import { addItemButtonElement, searchItemButtonElement, closeItemButtonElement } from './scripts/dom-element.js';
import { addItemHandler, searchItemHandler, closeItemHandler } from './scripts/handlers.js';


const itemList = [];
window.itemList = itemList;

addItemButtonElement.addEventListener('click', event => addItemHandler(event));
searchItemButtonElement.addEventListener('click', event => searchItemHandler(event));
closeItemButtonElement.addEventListener('click', event => closeItemHandler(event));
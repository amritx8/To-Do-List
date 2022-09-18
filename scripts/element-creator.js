import { getID } from './utils.js';
import { editItemHandler, removeItemHandler } from './handlers.js';

export const createItem = (item) => {
    const div = document.createElement('div');
    const className = 'item-container';

    div.className = className;
    div.id = getID(item.ID, className);

    const textArea = createTextArea(item);
    const removeButton = createButton('Remove', removeItemHandler, item.ID);

    div.append(textArea, removeButton);

    return div;
}

export const createTextArea = (item) => {
    const input = document.createElement('input');
    const className = 'item-text-area';

    input.className = className;
    input.id = getID(item.ID, className);
    input.value = item.name;
    input.readOnly = true;

    return input;
}

export const createButton = (type, buttonHandler, itemID) => {
    const button = document.createElement('button');
    const className = `item-${type.toLowerCase()}-button`;

    button.className = className;
    button.id = getID(itemID, className);

    const iElement = document.createElement('i');
    if(type === 'Edit') {
        iElement.className = 'fa fa-pencil'
    } else if(type === 'Remove') {
        iElement.className = 'fa fa-times'
    } else if(type === 'Save') {
        iElement.className = 'fa fa-check'
    }

    button.append(iElement)
    button.addEventListener('click', (event) => buttonHandler(event));

    return button;
}
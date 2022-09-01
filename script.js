class Item {
    
    constructor(ID, name, isDone = false) {
        
        this.ID = ID;
        this.name = name;
        this.isDone = isDone;
    }
};

const IDGenerator = () => {

    return Date.now().toString();
}

const createItem = (ID, name, editButtonEventListener, removeButtonEventListener) => {

    const div = document.createElement('div');
    const className = 'item-container';
    
    div.className = className;
    div.id = `i-${ID}-${className}`;

    const textArea = createTextArea(ID, name);
    const editButton = createButton('Edit', ID, editButtonEventListener);
    const removeButton = createButton('Remove', ID, removeButtonEventListener);

    div.append(textArea, editButton, removeButton);

    return div;
}

const createTextArea = (ID, name) => {

    const input = document.createElement('input');
    const className = 'item-text-area';

    input.className = className;
    input.id = `i-${ID}-${className}`;
    input.value = name;
    input.readOnly = true;

    return input;
}

const createButton = (type, ID, eventListener) => {

    const button = document.createElement('button');
    const className = `item-${type.toLowerCase()}-button`;

    button.className = className;
    button.id = `i-${ID}-${className}`;
    button.textContent = type;
    button.addEventListener('click', eventListener);

    return button;
}

let itemsList = [];

const addItemInputElement = document.querySelector('.item-add-input');
const addItemButtonElement = document.querySelector('.item-add-button');
const itemsListElement = document.querySelector('.items-list-container');

const updateDOM = () => {

    while(itemsListElement.lastChild) {

        itemsListElement.removeChild(itemsListElement.lastChild);
    }

    itemsList.forEach((item) => {

        const newItemElement = createItem(
            item.ID,
            item.name,
            editButtonEventListener,
            removeButtonEventListener
        );

        itemsListElement.appendChild(newItemElement);
    });
}

addItemButtonElement.addEventListener('click', () => {

    const name = addItemInputElement.value;

    if(!name) {

        return;
    }

    const ID = IDGenerator();
    const newItem = new Item(ID, name);

    itemsList.push(newItem);

    updateDOM();
});

const saveButtonEventListener = (event) => {

    const id = event.target.id;
    const ID = id.split('-')[1]

    const inputElement = document.querySelector(`#i-${ID}-item-text-area`);

    const newValue = inputElement.value;

    if(newValue) {

        itemsList = itemsList.map((item) => {

            if(item.ID === ID) {
    
                return {...item, name: newValue};
            } else {
    
                return item;
            }
        })
    }

    console.log(itemsList);

    updateDOM();
}

const editButtonEventListener = (event) => {

    const id = event.target.id;
    const ID = id.split('-')[1];

    const itemContainerElement = document.querySelector(`#i-${ID}-item-container`);

    itemContainerElement.removeChild(itemContainerElement.lastChild);
    itemContainerElement.removeChild(itemContainerElement.lastChild);

    itemContainerElement.lastChild.readOnly = false;

    const saveButton = createButton('Save', ID, saveButtonEventListener);

    itemContainerElement.append(saveButton);
}

const removeButtonEventListener = (event) => {

    const id = event.target.id;
    const ID = id.split('-')[1];
    
    itemsList = itemsList.filter((item) => item.ID !== ID);

    updateDOM();
}
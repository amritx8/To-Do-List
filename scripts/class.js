import { IDGenerator } from './utils.js';

export class Item {
    constructor(name, ID = IDGenerator(), isDone = false) {
        this.name = name;
        this.ID = ID;
        this.isDone = isDone;
    }
}
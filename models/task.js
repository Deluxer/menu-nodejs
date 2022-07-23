import { v4 as uuidv4 } from 'uuid';

export class Task {

    constructor(
        id = null,
        desc = null,
        completedIn = null,
    ){
        this.id = uuidv4();
        this.desc = desc;
        this.completedIn = completedIn;
    }
 }
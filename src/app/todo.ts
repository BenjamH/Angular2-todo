// deefines contract that class required these properties
export interface ITodo {
    title: string;
    link: string;
    complete: boolean;
}
// ensures class has ITodo
export class Todo implements ITodo {
    id: number;
    title: string;
    link: string;
    complete: boolean = false;

    // accept only interface values, id will be generated when adding to do.
    constructor(values: ITodo) {
        // copy values of all properties to 'this'
        Object.assign(this, values);
    }
}

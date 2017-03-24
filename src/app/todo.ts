export interface ToDoModel {
    id: number;
    title: string;
    link: string;
    complete: boolean;
}
export class Todo implements ToDoModel {
    id: number;
    title: string;
    link: string;
    complete: boolean = false;

    constructor(values: ToDoModel) {
        Object.assign(this, values);
    }
}

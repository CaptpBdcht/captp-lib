export class Stack<T> {

    private items: T[] = [];

    constructor(initialData: Array<T> = []) {
        this.items.push(...initialData);
    }

    size(): any {
        return this.items.length;
    }
}
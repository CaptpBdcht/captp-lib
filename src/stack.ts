export class Stack<T> {
    private items: T[] = [];

    constructor(initialData: Array<T> = []) {
        this.items.push(...initialData);
    }

    peek(): T | undefined {
        return this.isEmpty()
            ? undefined
            : this.items[this.items.length - 1];
    }

    pop(): T | undefined {
        return this.items.pop();    
    }

    push(value: T): void {
        this.items.push(value);
    }

    size(): number {
        return this.items.length;
    }

    isEmpty(): boolean {
        return this.size() === 0;        
    }
}
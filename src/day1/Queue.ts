type Node<T> = {
    value: T,
    next?: Node<T>
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const current: Node<T> = {
            value: item,
            next: undefined
        };

        this.length++;
        if (!this.tail) {
            this.head = this.tail = current;
            return;
        }

        this.tail.next = current;
        this.tail = current;
    }

    deque(): T | undefined {
        if (!this.head) return;
        
        this.length--;
        if (this.length === 0)
            this.tail = undefined;

        const current = this.head;
        this.head = this.head.next;

        return current.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
type Node<T> = {
    value: T,
    next?: Node<T>
};

export default class Queue<T> {
    public length: number = 0;
    private head?: Node<T>;
    private tail?: Node<T>;

    enqueue(item: T): void {
        const node: Node<T> = {
            value: item
        };

        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    deque(): T | undefined {
        if (!this.head) {
            return;
        }

        this.length--;
        if (this.length === 0) {
            this.tail = undefined;
        }

        const node = this.head;
        this.head = this.head.next;

        return node.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
type Node<T> = {
    value: T,
    prev?: Node<T>
};

export default class Stack<T> {
    public length: number = 0;
    private head?: Node<T>;

    push(item: T): void {
        this.length++;
        const node: Node<T> = {
            value: item,
            prev: this.head
        };

        this.head = node;
    }


    pop(): T | undefined {
        if (!this.head)
            return;

        this.length--;
        
        const node = this.head;
        this.head = this.head.prev;
        return node.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
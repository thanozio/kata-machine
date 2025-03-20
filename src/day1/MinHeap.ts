export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1; // sentinel value
        }
        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            // to avoid checking for undefined with .pop()
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }

        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        const currentValue = this.data[idx];

        if (leftValue > rightValue && currentValue > rightValue) {
            this.data[idx] = rightValue;
            this.data[rightIdx] = currentValue;
            this.heapifyDown(rightIdx);
        } else if (rightValue > leftValue && currentValue > leftValue) {
            this.data[leftIdx] = currentValue;
            this.data[idx] = leftValue;
            this.heapifyDown(leftIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const pidx = this.parent(idx);
        const parentValue = this.data[pidx];
        const currentValue = this.data[idx];

        if (parentValue > currentValue) {
            this.data[idx] = parentValue;
            this.data[pidx] = currentValue;
            this.heapifyUp(pidx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
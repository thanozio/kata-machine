function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    return [
        ...walk(curr.left, path),
        ...walk(curr.right, path),
        curr.value
    ];
}


export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
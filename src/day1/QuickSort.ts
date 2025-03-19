

function qs(arr: number[], lo: number, hi: number): void {
    if (lo < hi) {
        const p = partition(arr, lo, hi);
        qs(arr, lo, p-1);
        qs(arr, p+1, hi);
    }
}

// treating arr[hi] as pivot point
function partition(arr: number[], lo: number, hi: number): number {
    let idx = lo - 1;
    for (let i = lo; i < hi; i++) {
        if (arr[i] <= arr[hi]) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    [arr[hi], arr[idx]] = [arr[idx], arr[hi]];
    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
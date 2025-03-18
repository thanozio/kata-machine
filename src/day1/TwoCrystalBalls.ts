export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length));
    let current = 0;
    for (let i = step; i < breaks.length; i += step) {
        if (breaks[i]) {
            current = i;
            break;
        }
    }

    for (let j = current - step; j <= current && j < breaks.length; j++) {
        if (breaks[j]) {
            return j;
        }
    }

    return -1;
}

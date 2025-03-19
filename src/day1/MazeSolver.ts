const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
            return false;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    seen[curr.y][curr.x] = true;
    if (maze[curr.y][curr.x] === wall)  {
        return false;
    }

    path.push(curr);
    if (curr.x === end.x && curr.y === end.y) {
        return true;
    }

    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        const endFound = walk(maze, wall, {x: curr.x + x, y: curr.y + y}, end, seen, path);
        if (endFound) {
            return true;
        }
    }

    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}
export default function bfs(
    graph: WeightedAdjacencyMatrix, 
    source: number, 
    needle: number): number[] | null {

        const seen = new Array(graph.length).fill(false);
        const prev = new Array(graph.length).fill(-1);

        seen[source] = true;
        const q: number[] = [source];
        do {
            const curr = q.shift() as number;
            if (curr === needle) {
                break;
            }

            seen[curr] = true;
            const adjacent = graph[curr];
            for (let i = 0; i < adjacent.length; i++) {
                if (adjacent[i] === 0 || seen[i]) {
                    continue;
                }

                seen[i] = true;
                prev[i] = curr;
                q.push(i);
            }

        } while(q.length);


        if (prev[needle] === -1) {
            return null;
        }

        // build it backwards
        let curr = needle;
        const out: number[] = [];

        while (prev[curr] !== -1) {
            out.push(curr);
            curr = prev[curr];
        }

        return [source].concat(out.reverse());
}
function sortByHeight(a: number[]): number[] {
    const n = a.filter((i) => i != -1).sort(function(a, b){ return a - b }).reverse();
    return a.map((i) => i != -1 ? n.pop() : -1) as number[];
}

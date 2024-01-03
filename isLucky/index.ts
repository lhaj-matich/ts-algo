function isLucky(n: number): boolean {
    const result = n.toString();
    const firstHalf = result.slice(0, (Math.round(result.length / 2))).split('').reduce((current, accumulator) => {
        return current + parseInt(accumulator);
    }, 0)
    const secondHalf = result.slice(Math.round(result.length / 2), result.length).split('').reduce((current, accumulator) => {
        return current + parseInt(accumulator);
    }, 0)
    return firstHalf === secondHalf;
}

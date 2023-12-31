function shapeArea(n: number): number {
    let result = 0;
    const colsNumber = (n * 2) - 1
    const middlePoint = Math.floor(colsNumber / 2);
    for (let row = 0; row < n; row++)
    {
        for (let col = 0; col < colsNumber; col++)
        {
            if (middlePoint - row <= col && middlePoint + row >= col)
                result += 1;
        }
    }
    return (result * 2 - colsNumber);
}

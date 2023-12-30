function adjacentElementsProduct(inputArray: number[]): number {
    let max: number = -2000;
    let i: number = 0;
    let result: number;
    
    while (i < inputArray.length)
    {
        result = inputArray[i] * inputArray[i + 1];
        max = result > max ? result : max;
        i++;
    }
    return (max);
}

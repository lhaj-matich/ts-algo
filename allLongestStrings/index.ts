function getMax(strs: string[]): number {
    let max = 0;
    for (let i = 0; i < strs.length; i++)
    {
        max = strs[i].length > max ? strs[i].length : max;  
    }
    return (max);
}

function allLongestStrings(inputArray: string[]): string[] {
    const max = getMax(inputArray);
    const result: string[] = [];
    for (let i = 0; i < inputArray.length; i++)
    {
        if (inputArray[i].length === max)
        {
            result.push(inputArray[i]);
        }
    }
    return result;
}

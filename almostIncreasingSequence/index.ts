function almostIncreasingSequence(sequence: number[]): boolean {
    const inputSize = sequence.length;
    let count = 0;
    
    if (inputSize == 2)
        return true;
    for (let i = 1; i < inputSize; i++)
    {
        if (sequence[i] <= sequence[i - 1])
        {
            count += 1;
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1])
                return false;
        }
    }
    return count <= 1;
}
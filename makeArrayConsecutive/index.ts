function makeArrayConsecutive(statues: number[]): number {
    const result = statues.sort(function(a, b) {
     return a - b;
    });;
    let count = 0;
 
   for (let i = 0; i < result.length; i++)
   {
     if (result[i + 1])
       count += (result[i] - result[i + 1]) + 1
   }
   return Math.abs(count);
 }
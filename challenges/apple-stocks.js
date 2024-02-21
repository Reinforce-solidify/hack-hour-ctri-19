/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex:[1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = apple_stock => {
    if (!apple_stock || apple_stock.length < 2) return 0;

    let maxProfit = 0, minPrice = apple_stock[0];

    for (let i = 1; i < apple_stock.length; i++) {
        // calculate current profit when selling at current price
        const currentProfit = apple_stock[i] - minPrice;
        // update max profit 
        if (currentProfit > maxProfit) maxProfit = currentProfit
        // update minP price
        if (apple_stock[i] < minPrice) minPrice = apple_stock[i]

        console.log(`currentProfit: ${currentProfit}, maxProfit: ${maxProfit}, minPrice: ${minPrice}`)
    }

    return maxProfit;
}

console.log(highestProfit([1000, 500, 0]));

module.exports = {highestProfit}
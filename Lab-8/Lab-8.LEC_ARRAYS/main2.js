// Знайти неперервний підмасив масиву , сума елементів якого є максимальною. 
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

console.log(maxSubArray([1, -2, 3, 4, -1, 2, 1, -5, 4]));

// Створити функцію сумування двох дуже довгих чисел представлених строкою. 
function addLargeNumbers(num1, num2) {
    let result = '';
    let carry = 0;
    
    let maxLength = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');
    
    for (let i = maxLength - 1; i >= 0; i--) {
        const sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }
    
    if (carry > 0) {
        result = carry + result;
    }
    
    return result;
}

console.log(addLargeNumbers("123456789123456789", "987654321987654321"));

// Різниця двох масивів з урахуванням кількості однакових елементів
function arrayDifference(arr1, arr2) {
    const countMap = {};

    arr2.forEach(num => countMap[num] = (countMap[num] || 0) + 1);

    return arr1.filter(num => {
        if (countMap[num]) {
            countMap[num]--;
            return false;
        }
        return true;
    });
}

console.log(arrayDifference([1, 2, 2, 3, 4], [2, 3]));
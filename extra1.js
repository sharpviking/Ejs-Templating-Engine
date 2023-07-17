const arr = [3, 5, 55, 26, 11]

function findSum(arr) {
    let su = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

console.log((findSum(arr)))
const arr = [2, 3, 5, 6, 8]

function isEven(x) {
    return x % 2 === 0;
}

const output = arr.filter(isEven);

console.log(output);


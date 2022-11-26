let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, NaN, ];
let evenValue = 0;
let oddValue = 0;
let zeroValue = 0;
let notNumber = 0;

function getEvenAndOdd () {
for (let i = 0; i < array.length; i++) {
    
    if (typeof(array[i]) !== 'number' || !isNaN(array[i])) {
        if (array[i] === 0) {
            zeroValue += 1
        } else if (array[i] % 2 === 0) {
            evenValue += 1;
        } else if (array[i] % 2 !== 0) {
            oddValue += 1;
        } 
    } else {
        notNumber +=1;
    }

}
console.log(`Количество чётных: ${evenValue}; Количество нечётных: ${oddValue}; Количество нулей: ${zeroValue}; Не цифер в массиве: ${notNumber}`);

}

getEvenAndOdd ();
const numbers = [5,0,9,1,7,4,2,6,3,8];

let essai = numbers.toString();

let firstTry = numbers.join(',');
let secondTry = numbers.join('+');
let thirdTry = numbers.join(' ');
let forthTry = numbers.join('');

let ordering = [];

for (let i = 0; i <numbers.length; i++) {
    let elementTest = numbers[i];
    for (let j = i; j <numbers.length; j++) {
        let elementStock = numbers[j]
        if (elementTest <= elementStock){
            elementTest = elementStock;
            ordering[i]= elementTest;
        }else {
            ordering[i]= elementTest;
        }
    }
    let index = numbers.indexOf(ordering[i]);
}

console.log(ordering);

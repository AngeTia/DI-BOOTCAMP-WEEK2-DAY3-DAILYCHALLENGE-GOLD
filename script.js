const numbers = [5,0,9,1,7,4,2,6,3,8];

let essai = numbers.toString();

let essai1 = numbers.join(',');
let essai2 = numbers.join('+');
let essai3 = numbers.join(' ');
let essai4 = numbers.join('');

let ordering = [];

for (let i = 0; i <numbers.length; i++) {
    let elemi = numbers[i];
    for (let j = i; j <numbers.length; j++) {
        let elemj = numbers[j]
        if (elemi <= elemj){
            elemi = elemj;
            ordering[i]= elemi;
        }else {
            ordering[i]= elemi;
        }
    }
    let index = numbers.indexOf(ordering[i]);
}

console.log(ordering);
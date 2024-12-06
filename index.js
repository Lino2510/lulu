console.log("hello world")

for (let i = 0; i < 5; i++) {
    console.log(1)
}


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log("*")
    }
}

for (let i = 1; i <= 30; i++) {
    if (i % (3*5) == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}


//Study case
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 50) + 1);
}

let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

let average = total / numbers.length;

let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}



console.log("Array bilangan:", numbers);
console.log("Total:", total);
console.log("Rata-rata:", average);
console.log("Min:", min);
console.log("Maks:", max);







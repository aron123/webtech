// változók létrehozása, let, const
let x = 10;
console.log(x);

x = 'sadasdasdasd';
console.log(x);

const pi = 3.14;
//pi = 14;
//pi++;

// primitív adattípusok
const age = 14.1452; // number
const name = 'Béla'; // string
const active = true; // boolean
const dog = null;
const phone = undefined;

// elágazások
const userAge = 20;

if (userAge < 18) {
    console.log("Kiskorú");
} else if (userAge <= 65) {
    console.log("Felnőtt");
} else {
    console.log('Nyugdíjas');
}

// ciklusok
let i = 0;

console.log('while: ');
while (i <= 5) {
    console.log(i);
    i++;
}

console.log('for:');
for (let j=0; j <= 5; j++) {
    console.log(j);
}

// függvények
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('Feri');

function square(num) {
    return num * num;
}

const numSquare = square(2);
console.log(numSquare);

// összetett típusok: tömb
const values = [ 2, 8, 'körte', true ];

const exchangeRates = [
    397, 401, 395, 384, 388, 402, 400, 374 ];

// tömbök feldolgozása: for
for (let i=0; i < exchangeRates.length; i++) {
    console.log(exchangeRates[i]);
}

// tömbök feldolgozása: for-in
for (let i in exchangeRates) {
    console.log(exchangeRates[i]);
}

// tömbök feldolgozása: for-of
for (let rate of exchangeRates) {
    console.log(rate);
}

// tömbök feldolgozása: forEach függvény
exchangeRates.forEach((rate, index) => {
    console.log('index: ' + index + ', value: ' + rate);
});

// tömbök feldolgozása: transzformáció
const doubleOfRates = exchangeRates.map((rate) => {
    return rate * 2;
});
console.log('Double of exchange rates:', doubleOfRates);

// tömbök feldolgozása: szűrés
const greaterThan400 = exchangeRates.filter((rate) => {
    return rate > 400;
});
console.log('Exchange rates greater than 400 HUF:',
    greaterThan400);

// összetett adattípus: objektum
const person = {
    name: 'Béla',
    age: 25,
    male: true,
    dog: {
        name: 'Buksi',
        age: 10
    },
    courses: [ 'webtech', 'analízis' ],
    info: function() {
        console.log("Hi, I'm " + this.name
            + ', a ' + this.age + ' years old '
            + (this.male ? 'male' : 'female'));
    }
};

person.info();
// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

function random(min, max) {
    let randomNum = Math.random();
    let floor = Math.floor(randomNum * (max - min + 1)) + min;
    return floor;
}
function giveMeRandom(num) {
    let randomArr = [];
    for (let i = 0; i < num; i++) {
        randomArr.push(random(0, 10));
    }
    return randomArr;
}
function checkArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > 5) {
            console.log("true");
            sum += element;
        } else {
            console.log("false");
        }
    }
    return sum;
}
let randomArr = giveMeRandom(10);
let sum = checkArray(randomArr);
console.log(randomArr, sum);

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

const shoppingCart = [
    {
        'price': 5,
        'name': 'object1',
        'id': 0,
        'items': 10
    }, {
        'price': 10,
        'name': 'object2',
        'id': 1,
        'items': 15
    }, {
        'price': 15,
        'name': 'object3',
        'id': 2,
        'items': 20
    }, {
        'price': 20,
        'name': 'object4',
        'id': 3,
        'items': 25
    }
];
function shoppingCartTotal(shoppingCart) {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const element = shoppingCart[i];
        total += (element.items * element.price);
    }
    return total;
}
let total = shoppingCartTotal(shoppingCart);
console.log(`shopping cart total: ${total}`);

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

function addToShoppingCart(item) {
    shoppingCart.push(item);
    return shoppingCart.length;
}
let newItem = {
    'price': 25,
    'name': 'object5',
    'id': 4,
    'items': 30
};
let items = addToShoppingCart(newItem);
console.log(shoppingCart, items);

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart) {
    let maxPrice = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const element = shoppingCart[i];
        if (element.price > maxPrice) {
            maxPrice = element.price;
        }
    }
    return maxPrice;
}
console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

function latestShoppingCart(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1];
}
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

function loopUntil(x) {
    let greater3 = 0;
    while (greater3 < 3) {
        let randomNum = random(0, 9);
        if (randomNum > x) {
            console.log(randomNum);
            greater3++;
        }
    }
}
loopUntil(8);

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

function average(array) {
    let somma = 0;
    let media = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            somma += array[i];
        }
    }
    media = somma / array.length;
    return media;
}
console.log(`media: ${average(giveMeRandom(3))}`);

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

const stringArr = ['test', 'testtest', 'testtesttest'];
function longest(stringArr) {
    let longestString = '';
    for (let i = 0; i < stringArr.length; i++) {
        const element = stringArr[i];
        if (element.length > longestString.length) {
            longestString = element;
        }
    }
    return longestString;
}
console.log(longest(stringArr));

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

function filtroAntiSpam(emailContent) {
    if (emailContent.toUpperCase().includes('SPAM') || emailContent.toUpperCase().includes('SCAM')) {
        return false;
    } else {
        return true;
    }
}
console.log(`'test SPAM test' ${filtroAntiSpam('test SPAM test')}`);
console.log(`'test test' ${filtroAntiSpam('test test')}`);

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

function giorniAdOggi(date) {
    let today = new Date();
    let todayMs = today.getTime();
    let dateMs = date.getTime();
    let diffMs = Math.abs(todayMs - dateMs);
    let days = Math.round(diffMs / (1000 * 60 * 60 * 24));
    return days;
}
console.log(giorniAdOggi(new Date('2021-11-14')));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {
    let matrix = [];
    for (let i = 0; i < y; i++) {
        let row = [];
        for (let j = 0; j < x; j++) {
            row.push(i.toString() + j.toString());
        }
        matrix.push(row);
    }
    return matrix;
}
console.log(matrixGenerator(3, 2));

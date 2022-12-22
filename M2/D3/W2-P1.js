/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("ESERCIZIO 1");
let val1_es1 = 10;
let val2_es1 = 5;
if (val1_es1 > val2_es1) {
  console.log(`il numero più grande è: ${val1_es1}`)
} else {
  console.log(`il numero più grande è: ${val2_es1}`)
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log("ESERCIZIO 2");
let val_es2 = 50;
if (val_es2 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log("ESERCIZIO 3");
let val_es3 = 50;
if (val_es3 % 5 === 0) {
  console.log("divisible by 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log("ESERCIZIO 4");
let val1_es4 = 10;
let val2_es4 = 18;
if (val1_es4 === 8 || val2_es4 === 8) {
  console.log("uno dei numeri è 8");
} else if ((val1_es4 + val2_es4) === 8 || (val1_es4 - val2_es4) === 8 || (val2_es4 - val1_es4) === 8) {
  console.log("addizione o sottrazione uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log("ESERCIZIO 5");
let totalShoppingCart_es5 = 40;
if (totalShoppingCart_es5 < 50)
  totalShoppingCart_es5 += 10;
console.log(`totale: ${totalShoppingCart_es5}`);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log("ESERCIZIO 6");
let totalShoppingCart_es6 = 80;
let sconto_black_friday = totalShoppingCart_es6 * 20 / 100;
totalShoppingCart_es6 = totalShoppingCart_es6 - sconto_black_friday;
if (totalShoppingCart_es6 < 50)
  totalShoppingCart_es6 += 10;
console.log(`totale: ${totalShoppingCart_es6}`);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("ESERCIZIO 7");
let val1_es7 = 6;
let val2_es7 = 12;
let val3_es7 = 4;
if (val1_es7 > val2_es7 && val1_es7 > val3_es7) {
  if (val2_es7 > val3_es7) {
    console.log(`${val1_es7}, ${val2_es7}, ${val3_es7}`);
  } else {
    console.log(`${val1_es7}, ${val3_es7}, ${val2_es7}`);
  }
} else if (val2_es7 > val1_es7 && val2_es7 > val3_es7) {
  if (val1_es7 > val3_es7) {
    console.log(`${val2_es7}, ${val1_es7}, ${val3_es7}`);
  } else {
    console.log(`${val2_es7}, ${val3_es7}, ${val1_es7}`);
  }
} else if (val3_es7 > val1_es7 && val3_es7 > val2_es7) {
  if (val1_es7 > val2_es7) {
    console.log(`${val3_es7}, ${val1_es7}, ${val2_es7}`);
  } else {
    console.log(`${val3_es7}, ${val2_es7}, ${val1_es7}`);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log("ESERCIZIO 8");
let val_es8 = 3.5;
if (typeof (val_es8) === "number") {
  console.log(`${val_es8} è un numero`);
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log("ESERCIZIO 9");
let val_es9 = 29;
if (val_es9 % 2 == 0) {
  console.log(`${val_es9} è pari`);
} else {
  console.log(`${val_es9} è dispari`);
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
console.log("ESERCIZIO 10");
let val_es7 = 10;
if (val_es7 < 5) {
  console.log("Meno di 5");
} else if (val_es7 < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
console.log("ESERCIZIO 11");
let val_es11 = 5;
if (val_es11 < 5) {
  console.log("Tiny");
} else if (val_es11 < 10) {
  console.log("Small");
} else if (val_es11 < 15) {
  console.log("Medium");
} else if (val_es11 < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/
console.log("ESERCIZIO 12");
let isMale = false;
let gender = isMale ? "male" : "female";
console.log(`${gender}`);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/
console.log("ESERCIZIO 13");
let i_es13 = 0;
while (i_es13 <= 5) {
  console.log(`${i_es13}`);
  i_es13 += 1;
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/
console.log("ESERCIZIO 14");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}`);
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/
console.log("ESERCIZIO 15");
for (let i = 0; i <= 10; i++) {
  if (i !== 3 && i !== 8) {
    console.log(`${i}`);
  }
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
console.log("ESERCIZIO 16");
for (let i = 0; i <= 15; i++) {
  if ((i % 2) == 0) {
    console.log(`${i} è pari`);
  } else {
    console.log(`${i} è dispari`);
  }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
console.log("ESERCIZIO 17");
for (let i = 1; i <= 100; i++) {
  if ((i % 3) == 0 && (i % 5) == 0) {
    console.log("FizzBuzz");
  } else if ((i % 3) == 0) {
    console.log("Fizz");
  } else if ((i % 5) == 0) {
    console.log("Buzz");
  } else {
    console.log(`${i}`);
  }
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/
console.log("ESERCIZIO 18");
let day = 1;
for (let day = 1; day <= 7; day++) {
  switch (day) {
    case 1:
      console.log("lunedì");
      break;
    case 2:
      console.log("martedì");
      break;
    case 3:
      console.log("marcoledì");
      break;
    case 4:
      console.log("giovedì");
      break;
    case 5:
      console.log("venerdì");
      break;
    case 6:
      console.log("sabato");
      break;
    case 7:
      console.log("domenica");
      break;
    default:
      break;
  }
}

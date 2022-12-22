/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log('ESERCIZIO 1');
const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};
console.log(me);

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */
console.log('ESERCIZIO 2');
let dispari_es2 = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    dispari_es2.push(i);
  }
}
console.log(dispari_es2);

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
console.log('ESERCIZIO 3');
let random_es3 = [];
for (let i = 0; i < 10; i++) {
  random_es3.push(Math.floor(Math.random() * 100));
}
console.log(random_es3);

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
console.log('ESERCIZIO 4');
let array_es4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pari_es4 = [];
for (let i = 0; i < array_es4.length; i++) {
  const item = array_es4[i];
  if (item % 2 === 0) {
    pari_es4.push(item);
  }
}
console.log(pari_es4);

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */
console.log('ESERCIZIO 5');
let arr_es5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < arr_es5.length; i++) {
  sum += arr_es5[i];
}
console.log(sum);

/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/
console.log('ESERCIZIO 6');
let arr_es6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr_es6.length; i++) {
  arr_es6[i]++;
}
console.log(arr_es6);

/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/
console.log('ESERCIZIO 7');
let arr_es7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr_es7.length; i++) {
  const item = arr_es7[i];
  if (item % 2 === 0) {
    arr_es7.splice(i, 1);
  }
}
console.log(arr_es7);

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
console.log('ESERCIZIO 8');
let random_es8 = [];
for (let i = 0; i < 10; i++) {
  const rand = Math.floor(Math.random() * 10);
  if (random_es8.indexOf(rand) === -1) {
    random_es8.push(rand);
  }
}
console.log(random_es8);

/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log('ESERCIZIO 9');
let arr_es9 = ['EPICODE', 'is', 'great'];
for (let i = 0; i < arr_es9.length; i++) {
  const item = arr_es9[i];
  arr_es9[i] = item.length;
}
console.log(arr_es9);

/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
console.log('ESERCIZIO 10');
let arr_es10 = [1, 3, 5];
let arr_inv_es10 = [];
for (let i = arr_es10.length - 1; i >= 0; i--) {
  arr_inv_es10.push(arr_es10[i]);
}
console.log(`${arr_es10} ==> ${arr_inv_es10}`);

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/
console.log('ESERCIZIO 11');
let arr_es11 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max_es11 = 0;
for (let i = 0; i < arr_es11.length; i++) {
  const element = arr_es11[i];
  if (element > max_es11) {
    max_es11 = element;
  }
}
console.log(`valore massimo: ${max_es11}`);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/
console.log("ESERCIZIO 12");
let anno_es12 = 0;
let film_es12 = "";
for (let i = 0; i < movies.length; i++) {
  const element = movies[i].Year;
  if (anno_es12 === 0) {
    anno_es12 = element;
  } else {
    if (anno_es12 > Number(element)) {
      anno_es12 = element;
      film_es12 = movies[i].Title;
    }
  }
}
console.log(`il film più vecchio è: ${film_es12}`);

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 13");
console.log(`${movies.length}`);

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 14");
let arr_titoli_es14 = [];
for (let i = 0; i < movies.length; i++) {
  const element = movies[i];
  arr_titoli_es14.push(element.Title);
}
console.log(arr_titoli_es14);

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("ESERCIZIO 15");
let arr_film_es15 = [];
for (let i = 0; i < movies.length; i++) {
  const element = movies[i];
  if ((element.Year - 2000) >= 0) {
    arr_film_es15.push(element.Title);
  }
}
console.log(arr_film_es15);

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
console.log("ESERCIZIO 16");
const id = 'tt0355702';
for (let i = 0; i < movies.length; i++) {
  const element = movies[i];
  if (element.imdbID === id) {
    console.log(element);
  }
}

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 17");
let somma_es17 = 0;
for (let i = 0; i < movies.length; i++) {
  const element = movies[i];
  somma_es17 += Number(element.Year);
}
console.log(somma_es17);

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
console.log("ESERCIZIO 18");
let parola_es18 = "ring";
let film_trovati_es18=[];
for (let i = 0; i < movies.length; i++) {
  const element = movies[i];
  if (element.Title.toLowerCase().includes(parola_es18)) {
    film_trovati_es18.push(element);
  }
}
console.log(film_trovati_es18);

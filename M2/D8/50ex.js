// 21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"
let x = "John";
let y = "Doe";
console.log(`${x}<>${y}`);

// 22) Crea un oggetto con le seguenti proprietà: name, surname, email
let person = {
    name: "",
    surname: "",
    email: ""
};
console.log(person);

// 23) Cancella la proprietà email dall'oggetto appena creato
delete person.email;
console.log(person);

// 24) Crea un array contenente 10 stringhe
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push("stringa");
}
console.log(arr);

// 25) Mostra in console ogni stringa del precedente array
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

// 26) Crea un array contenente 100 numeri random
let randomArr = [];
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < 100; i++) {
    randomArr.push(random(0, 10));
}
console.log(randomArr);

// 27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato
function findMinMax(arr) {
    let min = null;
    let max = null;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (min === null) {
            min = element;
        }
        if (max === null) {
            max = element;
        }
        if (min > element) {
            min = element;
        }
        if (max < element) {
            max = element;
        }
    }
    return [min, max];
}
console.log(findMinMax(randomArr));

// 28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random
let arrOfArr = [];
for (let i = 0; i < 2; i++) { //2 array
    let newArr = [];
    for (let j = 0; j < 10; j++) { //array con 10 numeri random
        let randomNum = random(0, 10);
        newArr.push(randomNum);
    }
    arrOfArr.push(newArr);
}
console.log(arrOfArr);

// 29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi
function compareArr(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1;
    } else {
        return arr2;
    }
}
console.log(compareArr([1, 2, 3], [1, 2, 3, 4]));

// 30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore
function sumArrElements(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        total += element;
    }
    return total;
}
function compareArrSum(arr1, arr2) {
    let total1 = sumArrElements(arr1);
    let total2 = sumArrElements(arr2);
    if (total1 > total2) {
        return total1;
    } else {
        return total2;
    }
}
console.log(compareArrSum([10, 20, 30], [1, 2, 3]));

// ESERCIZI SUL DOM
// 31) Seleziona l'elemento con id "container" nella pagina
let container = document.getElementById("container");

// 32) Seleziona tutti gli elementi di tipo <td> nella pagina
let tdElements = document.getElementsByTagName("td");

// 33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina
for (let i = 0; i < tdElements.length; i++) {
    const element = tdElements[i];
    console.log(element.innerText);
}

// 34) Scrivi una funzione per cambiare il titolo della pagina
function changeTitle(newTitle) {
    document.getElementsByTagName("title")[0].innerText = newTitle;
}
changeTitle("nuovo titolo");

// 35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina
function addRow() {
    const tableBody = document.getElementById("table-body");
    const tableRow = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
        const td = document.createElement("td");
        td.innerText = `E${i + 1}`;
        tableRow.appendChild(td);
    }
    tableBody.appendChild(tableRow);
}
addRow();

// 36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella
function addTestClass() {
    const trs = document.getElementsByTagName("tr");
    for (let i = 0; i < trs.length; i++) {
        const tr = trs[i];
        tr.setAttribute("class", "test");
    }
}
addTestClass();

// 37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina
function changeLinkBG() {
    const links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.style.backgroundColor = "red";
    }
}
changeLinkBG();

// 38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi
window.onload = function () {
    console.log("Page loaded");
}

// 39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina
function ulAddElement() {
    const ul = document.getElementById("unordered-list");
    const li = document.createElement("li");
    li.innerText = "nuovo elemento";
    ul.appendChild(li);
}
ulAddElement();

// 40) Scrivi una funzione per svuotare una lista nella pagina
function empyList() {
    const ul = document.getElementById("unordered-list");
    ul.innerHTML = "";
}
empyList();

// ESERCIZI EXTRA
// 41) Aggiungi un event listener in modo che compaia un alert quando il cursore passa sopra un link; l'alert deve mostrare la sua proprietà href
function showAlert(event) {
    if (event.target.nodeName.toLowerCase() !== "img") {
        alert(event.target.href);
    }
}
function addLinkEventListener() {
    const links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.onmouseover = showAlert;
    }
}
addLinkEventListener();

// 42) Crea un bottone che una volta cliccato nasconde ogni immagine nella pagina
function hideImgs() {
    const imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        img.style.display = "none";
    }
}

// 43) Crea un bottone che una volta cliccato nasconde o mostra la tabella nella pagina
let tableVisible = true;
function showHideTable() {
    const table = document.getElementsByTagName("table")[0];
    if (tableVisible) {
        table.style.visibility = "hidden";
        tableVisible = false;
    } else {
        table.style.visibility = "visible";
        tableVisible = true;
    }
}

// 44) Crea una funzione per calcolare la somma di ogni numero contenuto in tutte le celle della tabella (se il contenuto è un numero)
function tdSum() {
    const tds = document.getElementsByTagName("td");
    let sum = 0;
    for (let i = 0; i < tds.length; i++) {
        const td = tds[i];
        const tdText = td.innerText;
        if (typeof tdText === "number") {
            sum += parseInt(tdText);
        } else {
            console.log(`${tdText} is not a number`);
        }
    }
    return sum;
}
console.log(tdSum());

// 45) Cancella l'ultima lettera dal titolo della pagina ogni volta che l'utente ci clicca sopra
function removeTitleLastLetter(event) {
    const title = document.getElementsByTagName("h1")[0];
    let newTitle = title.innerText.slice(0, title.innerText.length - 1);
    title.innerText = newTitle;
}

// 46) Aggiungi un event listener in modo che cliccando un <td> nella pagina, questo cambi colore di sfondo
function TdEventListener(event) {
    event.target.style.backgroundColor = 'orange';
}
function addTdEventListener() {
    const tds = document.getElementsByTagName("td");
    for (let i = 0; i < tds.length; i++) {
        const td = tds[i];
        td.onclick = TdEventListener;
    }
}
addTdEventListener();

// 47) Aggiungi un bottone che una volta cliccato elimini un <td> a caso nella tabella
function deleteRandomTd(event) {
    const table = document.getElementsByTagName("table")[0];
    const tds = table.getElementsByTagName("td");
    let rand = random(0, tds.length - 1);
    tds[rand].outerHTML = "";
}

// 48) Aggiungi automaticamente un bordo rosa ad una cella della tabella quando il cursore ci passa sopra
function changeTdBorderEvent(event) {
    event.target.style.border = "2px solid brown";
}
function chageTdBorder() {
    const tds = document.getElementsByTagName("td");
    for (let i = 0; i < tds.length; i++) {
        const td = tds[i];
        td.addEventListener("mouseover", changeTdBorderEvent);
        let a = 0;
    }
}
chageTdBorder();

// 49) Scrivi una funzione per creare una tabella con 4 righe e 3 colonne e aggiungerla alla fine della pagina
function createTable() {
    const table = document.createElement("table");
    const body = document.getElementsByTagName("body")[0];
    for (let row = 0; row < 4; row++) {
        const tr = document.createElement("tr");
        for (let col = 0; col < 3; col++) {
            const td = document.createElement("td");
            td.innerText = `${row}${col}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    body.appendChild(table);
}
createTable();

// 50) Scrivi una funzione per rimuovere l'ultima tabella presente nella pagina
function removeLastTable(event) {
    const tables = document.getElementsByTagName("table");
    tables[tables.length - 1].outerHTML = "";
}

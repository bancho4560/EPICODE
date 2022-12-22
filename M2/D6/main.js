/* ES.7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro */
function changeTitle() {
    const title = document.getElementById("title");
    title.innerHTML = "Nuovo titolo";
}

/* ES.8: Scrivi una funzione per cambiare il colore di background della pagina */
function changeBackground() {
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "green";
}

/* ES.9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio */
function changeAddress() {
    const address = document.getElementById("footer-indirizzo");
    address.innerHTML = "Via del futuro n. 1, ∞ (∞)";
}

// ES.10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function addCSSClass() {
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.add('color');
    }
}

// ES.11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function hideImg() {
    const img = document.getElementsByTagName('img');

    for (let i = 0; i < img.length; i++) {
        img[i].classList.add('hide');
    }
}
function showImg() {
    const img = document.getElementsByTagName('img');

    for (let i = 0; i < img.length; i++) {
        img[i].classList.remove('hide');
    }
}

// ES.12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function changePriceColor() {
    const color = ['red', 'green', 'aqua', 'orange', 'chocolate'];
    let newColor = color[random(0, color.length - 1)];
    const priceColor = document.getElementsByClassName('prod-price');
    for (let i = 0; i < priceColor.length; i++) {
        priceColor[i].style.color = newColor;
    }
}

const cards = document.querySelectorAll(".card");

// 17) Crea una funzione che rimuova tutte le "card" dalla pagina
function removeCardsEvent() {
    const btn = document.getElementById("rimuoviCardsBtn");
    console.log(btn);
    btn.addEventListener("click", ev => {
        console.log(ev);
        cards.forEach(card_ev => {
            console.log(card_ev);
            card_ev.remove();
        });
    });
}

// 13) Crea la possibilità di contare il numero di "viaggi" presenti sulla pagina.
function countCards() {
    const viaggi = document.getElementById("viaggi");
    viaggi.innerText = `Viaggi: ${cards.length}`;
}

// 16) Crea una funzione che aggiunga un badge con la scritta "HOT" su ognuna delle offerte "Welcome Summer".
function mostraHOTBadgeEvent() {
    const btn = document.getElementById("mostraHOTBadgeBtn");
    console.log(btn);
    btn.addEventListener("click", (ev) => {
        const badge = document.querySelectorAll("#summer .badge");
        console.log(badge);
        badge.forEach((e) => {
            e.classList.remove("d-none");
        });
    });
}

window.onload = () => {
    removeCardsEvent();
    mostraHOTBadgeEvent();
    countCards();
}
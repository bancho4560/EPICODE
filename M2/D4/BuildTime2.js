// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50

function calcPrice(prices, user, shippingCost) {
  let totaleCarrello = 0;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    totaleCarrello += price;
  }
  if (user.isAmbassador) {
    totaleCarrello -= (totaleCarrello * 30 / 100);
  }
  if (totaleCarrello <= 100) {
    totaleCarrello += shippingCost;
  }
  return totaleCarrello;
}
console.log(calcPrice(prices, marco, shippingCost));
console.log(calcPrice(prices, paul, shippingCost));
console.log(calcPrice(prices, amy, shippingCost));
console.log(calcPrice([50,50,50], marco, shippingCost));

/*const users = [marco, paul, amy];
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  let totaleCarrello = 0;
  for (let j = 0; j < prices.length; j++) {
    const price = prices[j];
    totaleCarrello += price;
  }
  if (user.isAmbassador) {
    totaleCarrello = totaleCarrello - (totaleCarrello * 30 / 100);
  }
  if (totaleCarrello <= 100) {
    totaleCarrello += shippingCost;
  }
  console.log(`${user.name} ${totaleCarrello}`);
}*/

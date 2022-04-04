/*5. Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2
porcijas, liks centų 10. Gali prireikti panaudoti Math.floor() funkciją.*/

const c = 50;
const p = 20;
const m = c % p;
const k = Math.floor(c/p);


const rez = `Saulius nusipirks ${Math.floor(k)} porcijas ir jam liks ${m} centu`;
console.log(rez);
/* 9. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. Jei metai neolimpiniai, turi būti pausdinama „Metai neolimpiniai“.
Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.
*/
const n = 1896;

if (n % 4 === 0) {
    let k = (n-1896)/4+1;
    console.log(k, 'Metai olimpiniai');
} else {
    console.log('Metai NEolimpiniai');
}

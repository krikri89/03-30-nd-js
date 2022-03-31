/*10. Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite:
jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; 
jei v1 = 8, m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.*/

const v1 = 8;
const m1 = 29;

const v = 9;
const m = 5;

const m2 = 23;

if (
    (v1*60+m1+m2)/60 > (v*60+m)/60) {
        console.log('Petras paveluos');
    } else {
        console.log('Petras NEpaveluos');
    }
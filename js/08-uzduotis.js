/*8. Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 arba 5 – kambarį tvarko jaunėlis, jei 2, 4 arba 6 – vyresnėlis. Parašykite programą, kuri įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba „Kambarį tvarkys vyresnėlis“. Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys
jaunėlis. Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis*/

const k = 9;

if (k === 2 || k === 4 || k === 6) {
    console.log('Kambarį tvarkys vyresnėlis');
} else if (k === 1 || k === 3 || k === 5) {
    console.log('Kambarį tvarkys jaunėlis');
} else {
    console.log('something is not working');
}

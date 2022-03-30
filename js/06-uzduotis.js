/*6. Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti:
Trikampį sudėlioti negalima*/


const n = 6;


if (n % 3 === 0){
    console.log('Trikampi sudelioti galima');
} else {
    console.log("Trikampi sudelioti negalima");
}


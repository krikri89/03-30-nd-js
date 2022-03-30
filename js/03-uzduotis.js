/*3. Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite:
Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes.*/

const d = 2;
const k = 8;
const n = 5;

if (d * n >= k)
{console.log('Knygos telpa i dezes');}
else {
    console.log('Knygos netelpa i dezes');
}
//-----------------------------------
const d1 = 3;
const k1 = 18;
const n1 = 5;

if (d1*n1 <=k1)
{console.log('Knygos netelpa i dezes');}
else {console.log('Knygos telpa i dezes');}

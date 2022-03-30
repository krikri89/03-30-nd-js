/*2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą,
kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-geltona, 3-raudona. 
Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.
*/

const spalva = 2;

switch (spalva) {
  case "1":
    console.log('zalia go');
    break;
  case "2":
    console.log(' geltona wait');
    break;
  case "3":
    console.log('raudona stop');
    break;
default:
    console.log('leave');
}

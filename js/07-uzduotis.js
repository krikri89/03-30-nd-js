/*7. Parašykite programą, kuri žinant mėnesio numerį n atspausdintų to mėnesio dienų kiekį d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)*/

const n = new Date ();
const d = new Date (n.getMonth(5))
console.log(d);



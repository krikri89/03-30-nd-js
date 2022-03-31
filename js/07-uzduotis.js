/*7. Parašykite programą, kuri žinant mėnesio numerį n  at spausdintų to mėnesio dienų kiekį d. (tarkime, kad metai yra paprastieji) (pvz. n =5,  ats. d=31; n =2  ats. d=28)*/



const n = 15;

if( n === 1 || n === 3|| n === 5|| n === 7 || n === 8 || n === 10 || n === 12) {
    console.log('d = 31');
} else if( n === 2 ) {
    console.log('d = 28');
} else if( n === 4|| n === 6|| n === 9|| n === 11 ) {
    console.log('d = 30');
} else {
    console.log('error');
}
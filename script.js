/**
 *   LES TABLEAUX 
 */
// Déclarer un tableau
let tableau = [34, "Welcome back!", 4.67, true];
console.log(tableau);

// L'index d'un tableau démarre toujours à zéro
// Extrait la valeur située en deuxième position
console.log(tableau[1]);
// Undefined car cet index n'existe pas
console.log(tableau[5]); 
//demande combien il y a d' index
console.log(tableau.length);

// Lire un tableau au complet
for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}
// forEach()
tableau.forEach(item => {
    console.log(item);
});
// for... in
// Extrait l'index du tableau
for (const item in tableau) {
    console.log(tableau[item]);
}
//for.. of
// Extrait la valeur du tableau
for (const item of tableau) {
    console.log(item);
}
// Exercice//
//#1
let prenoms = ["paul", "fred", "rose", "solen", "marie"];

    console.log(prenoms);

for (const prenom of prenoms) {
    console.log(prenom);
}
// Ajoute une nouvelle valeur en fin de tableau
// queleque soit le type (string, int, bool...)
prenoms.push("Jean");
console.log(prenoms);

// splice() permet de choisir l'emplacement où vous voulez
// ajouter votre nouvelle valeur.
// Premier paramètre : index où metre la nouvelle valeur
// deuxième paramètre : 0 (sinon suprime des éléments)
// troisième paramètre : la valeur à ajoutée
prenoms.splice(1, 0, "Romain");
console.log(prenoms);

// Point #3
// Supprime la valeur positionnée à l' index 2
//prenoms.splice(2, 1);
//console.log(prenoms);

// Stock les résultats filtrés dans une nouvelle variable
let filtered = prenoms.filter((value, index, array) => {
    // Retourne toutes les valeurs sauf celui ayant
    // l'index numéro 2
    return index !== 2;
});

console.log(prenoms);
console.log(filtered);

// #4
let lastName = ["cole", "jacque", "xavier"];

console.log(lastName);

// forEach 
lastName.forEach(item => {
    console.log(item);
});

// #5
// fusion 2 tableaux

// Associe 2 tableaux en un et stock le nouveau tableau
// dans une variable
let nouveau = lastName.concat(prenoms);
console.log(nouveau);

// Spread operator => ...
// Affecter par décomposition
let nouveauTableau =[...lastName, ...prenoms];
console.log(nouveauTableau);


let index = 0;
while(index < nouveauTableau.length) {
    console.log(nouveauTableau[index]);
    index++;
}




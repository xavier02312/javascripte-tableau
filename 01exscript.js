//    Créer le jeu du chifoumi (Pierre-Feuille-Ciseaux)
//
// 1/ Demande à l'utilisateur de choisir entre les 3 possibilités.
//
// 2/ Faire en sorte que le script choisisse aléatoirement une des 3 possibilités.
// 
// 3/ Vérifier si l' utilisateur à gagné ou perdu.
// 
// 4/ Afficher le résultat à gagné ou perdu.
//    -Gagné ou perdu
//    -Afficher le choix de l' utilisateur
//    -Afficher le choix du script
//
// 5/ Proposer une nouvelle partie .


/**
 * Pierre-Feuille-Ciseaux
 */

const possibility = ["pierre", "feuille", "ciseaux"];

//Math.Random() génère un nombre entre 0.000... et 0.999...
const indexRandon = Math.floor(Math.random() * possibility.length);
console.log(indexRandon);

// Récupère une valeur du tableau aléatoirement
const randomElement = possibility[indexRandon];
console.log(randomElement);

// Demande à l'utilisateur de choisir
// Join() permet de réunir dans une chaine de caractère
// les valeurs issues d'un tableau

// Déclare la constante à l'extérieur de la boucle pour
// éviter que celle-ci soit bloquée dans le bloc
let response;

do {    //toLowerCase() met une chaine de caractère en minuscule
    response = prompt(`${possibility.join(", ")} ?`).toLowerCase();
} while (possibility.includes(response) === false); 

// includes() permet de vérifier si la valeur passe en son 
// paramètre existe dans un tableau


// Vérifier si l' utilisateur à gagné ou perdu.
let winner;

if (response === "pierre" && randomElement === "ciseaux"
    || "ciseaux" && randomElement === "feuille" 
    || "feuille" && randomElement === "pierre" 
) {

    //console.log("Tu as gagné !");
    winner = "tu as gagné !";
}
else if (response === randomElement) {
    //console.log("Egalité !");
    winner = "Egalité !";
    
}
else {
     //console.log("Tu as perdu !");
     winner = "Tu as Perdu ! :(";
}

let restart = confirm(`${winner} Votre choix : ${response}, IA : ${randomElement}. Rejouer ?`);
if (restart) {
    location.reload();
}






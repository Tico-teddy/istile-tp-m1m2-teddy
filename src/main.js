
import { readFile } from "node:fs/promises";

// Importation des sept fonctions
import {
    moyenneGenerale,
    admis,
    nomsFormates,
    effectifParFiliere,
    moyenneParFiliere,
    classementParNote,
    majNote
} from "./etudiants.js";

// Chargement du fichier JSON
const etudiants = JSON.parse(
    await readFile(
        new URL("../data/etudiants.json", import.meta.url),
        "utf8"
    )
);

console.log("========== ISTILE ANNUAIRE ==========");

// 1. Moyenne générale
console.log("\n1. MOYENNE GÉNÉRALE");
console.log(moyenneGenerale(etudiants));

// 2. Liste des étudiants admis
console.log("\n2. ÉTUDIANTS ADMIS");
console.log(admis(etudiants));

// 3. Noms formatés
console.log("\n3. NOMS FORMATÉS");
console.log(nomsFormates(etudiants));

// 4. Effectif par filière
console.log("\n4. EFFECTIF PAR FILIÈRE");
console.log(effectifParFiliere(etudiants));

// 5. Moyenne par filière
console.log("\n5. MOYENNE PAR FILIÈRE");
console.log(moyenneParFiliere(etudiants));

// 6. Classement par note
console.log("\n6. CLASSEMENT PAR NOTE");

// Sauvegarde de la première ligne de la liste originale
const premierEtudiantAvant = { ...etudiants[0] };

const classement = classementParNote(etudiants);

console.log(classement);

// Preuve d'immutabilité numéro 1
console.log("\nPREUVE 1 : CLASSEMENT SANS MODIFICATION");
console.log(
    "Premier étudiant inchangé :",
    JSON.stringify(etudiants[0]) === JSON.stringify(premierEtudiantAvant)
);

// 7. Modification d'une note
console.log("\n7. MODIFICATION D'UNE NOTE");

// Choisir le premier étudiant
const etudiantOriginal = etudiants[0];

// Créer une nouvelle liste avec une nouvelle note
const nouvelleListe = majNote(
    etudiants,
    etudiantOriginal.id,
    18
);

// Retrouver le nouvel objet étudiant
const nouvelEtudiant = nouvelleListe.find(
    etudiant => etudiant.id === etudiantOriginal.id
);

console.log("Ancien étudiant :", etudiantOriginal);
console.log("Nouvel étudiant :", nouvelEtudiant);

// Preuve d'immutabilité numéro 2
console.log("\nPREUVE 2 : MODIFICATION SANS MUTATION");
console.log(
    "Les deux objets sont différents :",
    etudiantOriginal !== nouvelEtudiant
);
console.log(
    "L'ancienne note est conservée :",
    etudiantOriginal.note
);

console.log("\n========== FIN DU PROGRAMME ==========");

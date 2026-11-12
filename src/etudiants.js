
/**
 * 1. Calculer la moyenne générale
 */
export function moyenneGenerale(liste) {
    if (liste.length === 0) return 0;

    const somme = liste.reduce(
        (total, { note }) => total + note,
        0
    );

    return Number((somme / liste.length).toFixed(2));
}

/**
 * 2. Récupérer les étudiants admis
 */
export function admis(liste) {
    return liste.filter(({ note }) => note >= 10);
}

/**
 * 3. Formater les noms des étudiants
 */
export function nomsFormates(liste) {
    return liste.map(({ nom, prenom }) =>
        `${nom.toUpperCase()} ${prenom}`
    );
}

/**
 * 4. Calculer l'effectif par filière
 */
export function effectifParFiliere(liste) {
    return liste.reduce((effectifs, { filiere }) => {
        effectifs[filiere] = (effectifs[filiere] || 0) + 1;

        return effectifs;
    }, {});
}

/**
 * 5. Calculer la moyenne par filière
 */
export function moyenneParFiliere(liste) {
    const resultats = liste.reduce(
        (accumulateur, { filiere, note }) => {
            if (!accumulateur[filiere]) {
                accumulateur[filiere] = {
                    somme: 0,
                    nombre: 0
                };
            }

            accumulateur[filiere].somme += note;
            accumulateur[filiere].nombre += 1;

            return accumulateur;
        },
        {}
    );

    return Object.fromEntries(
        Object.entries(resultats).map(([filiere, donnees]) => [
            filiere,
            Number((donnees.somme / donnees.nombre).toFixed(2))
        ])
    );
}

/**
 * 6. Classer les étudiants par note décroissante
 */
export function classementParNote(liste) {
    return [...liste].sort((a, b) => b.note - a.note);
}

/**
 * 7. Modifier la note d'un étudiant sans modifier l'original
 */
export function majNote(liste, id, note) {
    return liste.map(etudiant =>
        etudiant.id === id
            ? { ...etudiant, note }
            : etudiant
    );
}

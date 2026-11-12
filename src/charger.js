
const BASE_URL = "https://dummyjson.com";

/**
 * Charger plusieurs utilisateurs depuis l'API.
 */
export async function chargerUtilisateurs(
    limite = 5,
    base = BASE_URL
) {
    try {
        const response = await fetch(
            `${base}/users?limit=${limite}`
        );

        if (!response.ok) {
            throw new Error(
                `Erreur HTTP ${response.status}`
            );
        }

        const donnees = await response.json();

        return donnees.users.map(
            ({ id, firstName, lastName, email }) => ({
                id,
                prenom: firstName,
                nom: lastName,
                email
            })
        );

    } catch (erreur) {
        console.error(
            "Impossible de charger les utilisateurs :",
            erreur.message
        );

        return [];
    }
}

/**
 * Charger un utilisateur précis depuis l'API.
 */
export async function chargerUtilisateur(
    id,
    base = BASE_URL
) {
    try {
        const response = await fetch(
            `${base}/users/${id}`
        );

        if (response.status === 404) {
            console.error(
                `Utilisateur ${id} introuvable (404)`
            );

            return null;
        }

        if (!response.ok) {
            throw new Error(
                `Erreur HTTP ${response.status}`
            );
        }

        const utilisateur = await response.json();

        return {
            id: utilisateur.id,
            prenom: utilisateur.firstName,
            nom: utilisateur.lastName,
            email: utilisateur.email
        };

    } catch (erreur) {
        console.error(
            `Impossible de charger l'utilisateur ${id} :`,
            erreur.message
        );

        return null;
    }
}

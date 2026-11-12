# Réponses au mini-TP ISTILE

## Partie A — Git et GitHub

## Partie B — HTML et CSS

## Partie C — HTTP

## Partie C — Lecture de HTTP

**1. Requête `/users/1`**

- Méthode : GET.
- Code d'état observé : 304 Not Modified.
- Type de contenu : application/json.
- Deux champs JSON : `id` et `firstName`.

**2. Requête `/users/99999`**

Le serveur renvoie le code 404 (Not Found), qui signifie que l'utilisateur demandé est introuvable. L'interface doit afficher un message clair à l'utilisateur.

**3. Classement côté client / côté serveur**

- (a) Afficher un message d'erreur sous un champ : côté client.
- (b) Enregistrer une note dans la base de données : côté serveur.
- (c) Vérifier un mot de passe : côté serveur.
- (d) Changer la couleur d'un bouton au survol : côté client.
- (e) Vérifier les droits de suppression d'une note : côté serveur.

**4. Association des codes HTTP**

- 201 : création réussie ; afficher une confirmation.
- 401 : authentification nécessaire ou invalide ; demander à l'utilisateur de se connecter.
- 404 : ressource introuvable ; afficher un message adapté.
- 500 : erreur interne du serveur ; informer l'utilisateur et proposer de réessayer.

## Partie D — JavaScript et JSON

## Partie E — Asynchronisme et API

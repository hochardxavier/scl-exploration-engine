# CHANGELOG

Toutes les évolutions importantes du SCL Exploration Engine sont documentées dans ce fichier.
---
## v0.1.0-alpha8 (15/07/2026)

✔ Création du système de conditions

✔ Création de InputPopupService

✔ Gestion des actions onSuccess / onFailure

✔ Première interaction utilisateur avec saisie de texte

✔ Affichage des objets dans InputPopupService

✔ Focus automatique sur le champ de saisie

✔ Validation par la touche Entrée

✔ Refactorisation de ActionManager pour exécuter des listes d'actions

## v0.1.0-alpha7 (09/07/2026)

✔ Création de l'ActionManager

✔ Mise en place de l'architecture Manager / Service

✔ Création du PopupService

✔ Premier système d'actions piloté par le JSON

✔ Première popup interactive (titre, texte, illustration)

✔ Gestion d'une popup unique via currentPopup

✔ Séparation du JavaScript et du CSS pour les interfaces HTML

---

## v0.1.0-alpha6 (08/07/2026)

✔ Création de l'InputManager

✔ La Flashlight utilise désormais l'InputManager

✔ Création de l'InteractionManager

✔ Détection du survol des objets

✔ Première surbrillance des objets interactifs

✔ Détection du clic sur un objet

---
## v0.1.0-alpha5 (06/07/2026)

### Nouveautés

- ✔ Préchargement automatique des textures
- ✔ Chargement des objets depuis les scènes JSON
- ✔ Affichage des objets par le Renderer
- ✔ Positionnement des objets en coordonnées relatives (%)
- ✔ Point d'ancrage des objets centré

### Architecture

- Les ressources graphiques sont désormais chargées par `SceneLoader`.
- Le `Renderer` dessine uniquement des ressources déjà préparées.

---
## v0.1.0-alpha4 (03/07/2026)

### Nouveautés

- ✔ Support des Pointer Events
- ✔ Compatibilité PC
- ✔ Compatibilité Android

### Corrections

- ✔ Déplacement fluide de la lampe torche sur écran tactile

---

## v0.1.0-alpha3 (02/07/2026)

### Nouveautés

- ✔ Chargement des scènes via JSON
- ✔ Affichage dynamique d'une image de fond
- ✔ Premier système d'éclairage dynamique
- ✔ Lampe torche suivant le pointeur
- ✔ Création du composant `Renderer`
- ✔ Séparation du rendu graphique de l'Engine

### Architecture

- Refactorisation de l'Engine.
- Le rendu graphique est désormais entièrement confié au `Renderer`.

---

## v0.1.0-alpha2 (01/07/2026)

### Nouveautés

- ✔ Chargement asynchrone des scènes
- ✔ Premier SceneLoader
- ✔ Chargement des ressources graphiques

---

## v0.1.0-alpha1 (30/06/2026)

### Nouveautés

- ✔ Initialisation du moteur
- ✔ Boucle de rendu temps réel
- ✔ Premier affichage Canvas

---

## v0.1.0 (30/06/2026)

### Initialisation du projet

- Création du dépôt GitHub
- Mise en place de l'architecture initiale
- Création de la documentation
- Début du développement du moteur

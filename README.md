# SCL Exploration Engine 

## Présentation

Le **SCL Exploration Engine** est un moteur d'exploration interactif développé pour les enquêtes de **Stranger Code Legacy**.

Son objectif est de permettre la création d'enquêtes immersives où le monde réel et le numérique se complètent, sans jamais modifier le moteur lui-même.

Le moteur ne contient aucun scénario. Toutes les enquêtes sont entièrement décrites à l'aide de fichiers **JSON** et de ressources graphiques.

Le moteur est conçu selon une approche "Low Tech / High Tech" : le monde réel constitue le terrain de jeu, tandis que le numérique enrichit l'expérience sans jamais s'y substituer.

---

# Philosophie

Le moteur ne raconte aucune enquête.

Il fournit uniquement les outils permettant de raconter n'importe quelle enquête.

Le monde réel reste le terrain de jeu.

Le moteur numérique révèle progressivement ses secrets.

Les principes de conception sont :

- simplicité avant sophistication ;
- robustesse avant optimisation ;
- immersion avant démonstration technique ;
- séparation stricte des responsabilités ;
- moteur générique, contenu entièrement piloté par les données.

---

# Fonctionnalités actuelles

- ✔ Chargement des scènes via JSON
- ✔ Boucle de rendu temps réel
- ✔ Chargement dynamique des images de fond
- ✔ Système d'éclairage dynamique (lampe torche)
- ✔ Architecture modulaire (Engine / Renderer / SceneLoader / Flashlight)
- ✔ Compatible PC et Android

---

# Fonctionnalités prévues

- Objets interactifs
- Gestion des interactions
- Popups
- Inventaire
- États des objets
- Effets sonores
- Transitions entre scènes
- Sauvegarde de progression
- Éditeur de scènes (long terme)

---

# Architecture

Le moteur repose actuellement sur les composants suivants :

- **Engine** : orchestre le fonctionnement général.
- **Renderer** : dessine tous les éléments graphiques.
- **SceneLoader** : charge les scènes JSON.
- **Flashlight** : gère le système d'éclairage dynamique.

Cette architecture évolue progressivement au rythme des besoins des enquêtes.

---

# Version actuelle

**v0.1.0-alpha3**

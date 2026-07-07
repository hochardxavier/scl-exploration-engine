# Philosophy

Le SCL Exploration Engine n'est pas un jeu.

C'est un moteur permettant de créer des enquêtes interactives.

---

# Le monde réel est le terrain de jeu.

Le numérique ne remplace jamais le réel.

Il révèle progressivement ses secrets.

---

# Le moteur ne raconte aucune histoire.

Toutes les histoires sont décrites par les fichiers de données.

Le moteur fournit uniquement les outils nécessaires à leur mise en scène.

---

# Philosophie du SCL Exploration Engine

## Le moteur ne connaît jamais le scénario.

Le moteur ne contient aucune logique propre à une enquête.
Toutes les règles sont décrites par les données (JSON).

---

## Le moteur ne connaît jamais la plateforme.

Le moteur fonctionne indépendamment de Wix.
Il peut être intégré à n'importe quelle plateforme capable de lui fournir une scène et de recevoir son résultat.

---

## Une instance = une scène.

Une instance du moteur gère une seule scène d'exploration.

Elle est responsable de l'ensemble des interactions locales de cette scène :

- affichage ;
- objets ;
- popups ;
- états locaux ;
- inventaire temporaire ;
- énigmes locales.

Le moteur ne change jamais lui-même de scène.

---

## La plateforme orchestre la mission.

La plateforme (Wix aujourd'hui) est responsable :

- des utilisateurs ;
- des équipes ;
- des sauvegardes ;
- de la progression globale ;
- des récompenses ;
- du lancement des scènes.

Le moteur lui renvoie simplement le résultat de la scène.

---

# Simplicité avant sophistication.

Une solution simple, robuste et maintenable est toujours préférée à une solution spectaculaire mais complexe.

Le moteur est conçu comme une voiture familiale :

- fiable ;
- confortable ;
- durable.

Jamais comme une voiture de course.

---

# L'expérience du joueur est prioritaire.

Chaque décision technique doit améliorer l'expérience de jeu.

Jamais l'inverse.

---

# Les objets sont indépendants du décor.

Le décor crée l'ambiance.

Les objets créent le gameplay.

---

# Le moteur évolue au rythme des besoins.

Une fonctionnalité n'est développée que lorsqu'une enquête en a besoin.

Aucune anticipation inutile.

---

# La modularité est une conséquence.

Pas un objectif.

Chaque composant possède une responsabilité unique.

---

# La meilleure fonctionnalité est celle qui permet de créer plusieurs enquêtes.

Chaque évolution du moteur doit augmenter les possibilités offertes aux créateurs de scénarios sans complexifier inutilement le moteur.

# Architecture

## Philosophie

Le SCL Exploration Engine est construit selon une architecture modulaire.

Chaque composant possède une responsabilité unique et communique avec les autres par l'intermédiaire du moteur (`Engine`).

Aucun composant ne doit assumer plusieurs responsabilités.

Une nouvelle classe n'est créée que lorsqu'elle répond à un besoin réel du moteur.

---

## Architecture actuelle

app.js
│
▼
Engine
├── SceneLoader
├── Renderer
└── Flashlight


### Engine

Le cœur du moteur.

Responsabilités :

- initialiser le moteur ;
- charger la scène ;
- démarrer la boucle de jeu ;
- coordonner les différents composants.

L'Engine ne dessine aucun élément graphique.

---

### SceneLoader

Charge les scènes décrites en JSON.

Le moteur ne contient aucune donnée de scénario.

Toutes les informations proviennent des fichiers de données.

---

### Renderer

Responsable de l'ensemble du rendu graphique.

Il dessine actuellement :

- le fond de la scène ;
- les effets lumineux.

À terme, il dessinera également :

- les objets ;
- l'interface utilisateur ;
- les effets visuels.

---

### Flashlight

Gère le système d'éclairage dynamique.

Responsabilités :

- suivre la position du pointeur ;
- calculer le halo lumineux ;
- dessiner le masque d'obscurité.

Le composant ignore totalement le contenu de la scène.

---

## Architecture prévue

Les composants suivants seront ajoutés progressivement au rythme des besoins du moteur :

- InteractionManager
- PopupManager
- InventoryManager
- AudioManager
- SaveManager

Une nouvelle classe n'est créée que lorsqu'elle répond à un besoin réel du moteur.

---

## Principes de conception

- Une classe = une responsabilité.
- Le moteur ne contient aucun scénario.
- Les scènes sont entièrement décrites par des fichiers JSON.
- Les objets sont indépendants du décor.
- L'architecture évolue progressivement sans remettre en cause les composants existants.

# Principes d'architecture du SCL Exploration Engine

L'architecture du moteur repose sur une séparation stricte des responsabilités.
Chaque composant appartient à une catégorie bien définie.

## Les noms des composants doivent refléter leur responsabilité réelle, et non une convention de développement.

---

# Engine

L'Engine est le chef d'orchestre.

Il instancie les composants.
Il pilote le cycle de vie du moteur.

Il ne contient aucune logique métier.

Responsabilités :

- initialisation
- boucle de jeu
- communication entre les composants

---

# Manager

Un Manager reçoit une information.

Il l'analyse.

Il décide quels composants spécialisés doivent intervenir.

Il centralise leurs réponses avant de restituer un résultat cohérent.

Un Manager ne réalise pas lui-même le travail spécialisé.

Exemples :

- InputManager
- InteractionManager
- ActionManager

---

# Service

Un Service réalise une tâche précise.

Il ne prend aucune décision métier.

Il exécute simplement la demande qui lui est adressée.

Un Service ne connaît jamais le scénario.

Exemples futurs :

- PopupService
- InventoryService
- AudioService

---

# Renderer

Un Renderer dessine.

Il ne prend aucune décision.

Il transforme uniquement des données en affichage.

Exemples :

- Renderer

---

# Loader

Un Loader transforme une ressource externe en objet exploitable.

Il ne modifie jamais les données.

Exemples :

- SceneLoader

---

# Principe fondamental

Chaque composant répond à une seule question.

Plus une classe répond à de questions différentes,
plus elle doit être découpée.

Cette règle prévaut sur toute autre considération.

---

# Évolution du moteur

Une nouvelle fonctionnalité est développée en quatre étapes.

1. Création du composant.
2. Le composant reçoit les données.
3. Le composant comprend les données.
4. Le composant agit.

Aucune étape n'est fusionnée avec une autre.

Cette progression garantit un moteur simple à tester et à maintenir.

# Coding Rules

## Principes généraux

- Une classe = une responsabilité.
- Le moteur ne contient aucun scénario.
- Les scènes sont entièrement pilotées par les données.
- Aucune coordonnée codée en dur.
- Une fonctionnalité n'est développée qu'une seule fois.
- Une nouvelle classe n'est créée que lorsqu'elle répond à un besoin réel.
- Une architecture validée n'est plus remise en question sans raison majeure.

---

## Cycle de vie d'un composant

constructor()

Prépare uniquement les propriétés internes.

Ne charge aucune ressource.

---

init()

Initialise les ressources externes.

Chargement d'images, création des listeners...

---

start()

Démarre le composant.

---

update()

Met à jour la logique.

Aucun dessin.

---

render()

Dessine uniquement.

Aucune logique métier.

---

stop()

Arrête le fonctionnement sans détruire le composant.

---

destroy()

Libère toutes les ressources.

---

## Positionnement

Toutes les coordonnées représentent le centre de l'élément.

Cette convention s'applique aux objets, aux interfaces et à tout élément graphique du moteur.

Aucune coordonnée ne représente le coin supérieur gauche.

## Cycle d'une frame

Chaque frame suit toujours le même ordre :

update()

↓

render()

↓

endFrame()

Les informations temporaires (événements de clic, etc.) sont réinitialisées dans endFrame().

---

## Encapsulation

Les composants du moteur ne lisent jamais directement les données internes d'un autre composant.

Ils utilisent toujours une méthode dédiée.

✔ actionManager.getActions(object)

✔ inventoryManager.hasItem(id)

✔ interactionManager.getClickedObject()

✘ object.actions

✘ inventory.items

✘ interactionManager.clickedObject

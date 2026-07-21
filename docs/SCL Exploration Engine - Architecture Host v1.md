Le SCL Exploration Engine est un moteur d'exécution de scènes interactives, indépendant de toute plateforme. Il reçoit un contexte, exécute une scène, puis restitue un résultat à son hôte sans jamais connaître la logique métier qui l'entoure.

# 1. Objectif

Le SCL Exploration Engine est un moteur d'exécution de scènes interactives.

Son rôle est de jouer une scène, d'en restituer le résultat à son hôte, puis de s'arrêter.

Il n'est pas responsable de la campagne, des joueurs, des missions ou des sauvegardes.

Ces responsabilités appartiennent au Host.

# 2. Les responsabilités

Composant >>	Responsable de
Engine >>	Jouer une scène
HostService >>	Traduire le contexte entre Host et Engine
BrowserHostAdapter >>	Transport des messages
Host (Wix) >>	Campagne, joueurs, sauvegarde, progression

# 3. Les règles absolues

## Règle 1

Le moteur ne connaît jamais son hôte.

## Règle 2

Le moteur n'accède jamais directement aux bases de données.

## Règle 3

Le moteur ne connaît jamais les GameGroups.

## Règle 4

Le moteur ne connaît jamais MemberId.

## Règle 5

Toute communication passe par HostService.

## Règle 6

Toute communication avec le navigateur passe par BrowserHostAdapter.

## Règle 7

Le moteur produit des événements.

Il ne prend jamais de décisions métier.



Par exemple :

Le moteur ne dira jamais :

Mission terminée.

Il dira seulement :

Le joueur a obtenu les joyaux.

# 4. Cycle de vie

Host

↓

launch()

↓

Engine

↓

Le joueur joue

↓

returnToHost

↓

Host

↓

Engine détruit

# 5. Le protocole Host v1

Entrée
{
    type: "launch",
    payload: {}
}
Sortie
{
    type: "launch-completed",
    payload: {}
}

# 6. Les interdictions



Dans Engine :

❌ window.parent.postMessage(...)

❌ $w(...)

❌ wixData.query(...)

❌ fetch(...)

(sauf si un jour on décide explicitement de créer un service réseau.)

# 7. Les évolutions prévues

Host pourra recevoir plus tard :

save-request

achievement

open-url

open-scene

show-dialog

download-file

etc.

# 8. Les principes fondateurs

## Responsabilité unique

Chaque classe ne fait qu'une chose.

## Découplage

Le moteur ignore son environnement.

## Pilotage par les données

Les scènes sont décrites par du JSON.

Le moteur les interprète.

Il ne contient jamais la logique métier.

## Événementiel

Le moteur ne décide pas.

Il émet des événements.

Le Host décide.

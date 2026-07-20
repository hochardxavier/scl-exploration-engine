SCL Exploration Engine Protocol v1
Objectif

Le SCL Exploration Engine est un moteur d'exécution de scènes interactives.

Il ne connaît ni les joueurs, ni les équipes, ni les bases de données, ni le logiciel qui le pilote.

Le moteur reçoit un contexte d'exécution, exécute une scène de manière autonome, puis retourne son état final ainsi que les événements produits pendant l'exécution.

Le protocole est indépendant du moyen de communication utilisé (postMessage, API REST, WebSocket, Electron IPC, etc.).

Principes d'architecture

Le moteur est un exécutant.

Il ne décide jamais :

quelle scène lancer ;
quand commencer une mission ;
quelle récompense attribuer ;
comment sauvegarder la progression ;
quelle scène charger ensuite.

Toutes ces décisions appartiennent au commanditaire.

Le moteur se contente :

d'exécuter une scène ;
de maintenir son état interne ;
d'émettre les événements produits par cette scène.
Cycle de vie
Commanditaire
      │
      │ Demande l'exécution d'une scène
      ▼
SCL Exploration Engine
      │
      │ Chargement
      │
      │ Exécution autonome
      │
      ├── interactions
      ├── inventaire
      ├── conditions
      ├── événements
      │
      ▼
Retour de l'état final
      │
      ▼
Commanditaire
Contexte d'entrée

Le commanditaire fournit un contexte d'exécution.

Paramètres obligatoires
Paramètre	Type	Description
sceneId	string	Identifiant unique de la scène à exécuter.
Paramètres optionnels
Configuration du moteur
Paramètre	Type	Défaut	Description
flashlightIntensity	number	90	Intensité du voile sombre (0 à 100).

Cette valeur configure uniquement le rendu graphique.

Elle n'a aucune influence sur le scénario.

État initial
Paramètre	Type	Défaut	Description
inventory	array	[]	Inventaire initial du joueur.
flags	object	{}	États logiques connus avant le lancement de la scène.

Ces informations permettent de créer des interactions entre plusieurs scènes.

Informations techniques
Paramètre	Type	Description
sessionId	string	Identifiant de la session d'exécution.
hostId	string	Identifiant du commanditaire.

Ces informations sont transportées par le moteur mais n'ont aucune incidence sur son fonctionnement.

Exemple de contexte
{
    "sceneId": "scene02",

    "flashlightIntensity": 90,

    "inventory": [
        "masterKey"
    ],

    "flags": {
        "spectraSolved": true
    },

    "sessionId": "A42",

    "hostId": "wix"
}
Exécution

Une fois la scène démarrée, le moteur devient entièrement autonome.

Il gère notamment :

le chargement de la scène ;
les interactions ;
les conditions ;
les popups ;
l'inventaire ;
les animations ;
les événements définis par le scénario.

Le commanditaire n'intervient plus pendant cette phase.

Émission d'événements

Le moteur ne décide jamais des conséquences d'un événement.

Il se contente de le signaler au commanditaire.

Exemple :

{
    "type": "emit",
    "event": "missionCompleted"
}

ou

{
    "type": "emit",
    "event": "secretFound"
}

Le moteur ne connaît pas la signification de ces événements.

Le commanditaire décide librement des actions à entreprendre.

Exemples :

fermer la scène ;
lancer une cinématique ;
charger une nouvelle scène ;
attribuer une récompense ;
enregistrer une progression.
Fin d'exécution

À la fin de son exécution, le moteur retourne son état final.

Exemple :

{
    "status": "completed",

    "inventory": [
        "masterKey",
        "jewels"
    ],

    "flags": {},

    "events": [
        "missionCompleted"
    ],

    "sessionId": "A42"
}
Valeurs possibles de status

Le moteur décrit uniquement son état de sortie.

Il ne porte aucun jugement sur la réussite de la mission.

Valeurs actuellement prévues :

Valeur	Description
completed	La scène est arrivée à son terme normal.
cancelled	La scène a été quittée volontairement.
failed	La scène s'est terminée par un échec prévu par le scénario.
aborted	L'exécution a été interrompue pour une raison technique ou exceptionnelle.

Cette liste pourra évoluer avec les futures versions du protocole.

Responsabilités
Commanditaire

Le commanditaire est responsable :

du choix de la scène ;
de la progression du joueur ;
des sauvegardes ;
des récompenses ;
des scores ;
des transitions entre scènes ;
de l'interface utilisateur générale.
SCL Exploration Engine

Le moteur est responsable :

du chargement de la scène ;
de l'exécution des interactions ;
de la gestion de l'inventaire ;
de l'évaluation des conditions ;
de l'émission des événements ;
de la restitution de l'état final.

Le moteur ne prend jamais de décision métier concernant la progression du joueur.

Philosophie du protocole

Le protocole décrit un dialogue, pas une technologie.

Le même protocole doit pouvoir fonctionner avec :

Wix (postMessage)
Electron (IPC)
WebView Android
API REST
WebSocket
ou tout autre moyen de communication futur.

Le moteur ne connaît jamais le transport utilisé.

Il échange uniquement des données conformes au SCL Exploration Engine Protocol.

Historique

Version 1.0 (Draft)

Définition du contexte d'exécution.
Définition de l'état final retourné par le moteur.
Introduction des événements (emit).
Séparation explicite entre le protocole et le transport.
Introduction du champ status en remplacement de success, afin que le moteur décrive un état de sortie sans interpréter son résultat.

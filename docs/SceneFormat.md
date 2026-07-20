# Scene Format

## Présentation

Une scène est un fichier JSON décrivant une séquence d'interactions interprétée par le SCL Exploration Engine.

Une scène ne contient aucune logique liée à son environnement d'exécution (Wix, Electron, Android, etc.). Elle décrit uniquement les éléments interactifs, les conditions et les actions qui composent le gameplay.

Le moteur est responsable de l'interprétation de la scène.

Le Host est responsable de son lancement et de l'exploitation du résultat.


---

# Cycle de vie d'une scène

Une scène est exécutée selon le cycle suivant :

```
Host
 │
 ▼
HostService
 │
 ▼
Construction du SceneContext
 │
 ▼
Chargement de la scène
 │
 ▼
Exécution des actions
 │
 ▼
Modification du SceneContext
 │
 ▼
returnToHost
 │
 ▼
HostService
 │
 ▼
Réponse au Host
```

Le moteur n'appelle jamais directement le Host.

Il émet un événement `returnToHost` que le HostService interprète comme la fin de la scène.


---

# SceneContext

Le SceneContext représente l'état courant de la scène.

Il est créé par le HostService avant le chargement de la scène.

Il est partagé par tous les services du moteur pendant l'exécution.

Il constitue l'unique source de vérité de la scène.


## Structure actuelle

```javascript
{

    hostId: null,

    sessionId: null,

    sceneId: "scene02",

    flashlightIntensity: 90,

    inventory: [],

    flags: {}

}
```

## Responsabilités

Le SceneContext contient les informations nécessaires à l'exécution d'une scène.

Les services (InventoryService, ConditionService, etc.) ne stockent pas les données de la scène.

Ils manipulent exclusivement le SceneContext.


---

# Structure générale d'une scène

Une scène est composée d'éléments interactifs.

Chaque élément possède une liste d'actions exécutées lorsque ses conditions sont validées.

Exemple simplifié :

```json
{

    "elements": [

        {

            "id": "safe",

            "actions": [

                {

                    "type": "popup"

                },

                {

                    "type": "inventoryAdd",

                    "item": "key"

                },

                {

                    "type": "returnToHost",

                    "result": "keyFound"

                }

            ]

        }

    ]

}
```

---

# Actions

Les actions sont exécutées séquentiellement.

Chaque action possède une propriété obligatoire :

```json
"type"
```

Le moteur exécute les actions dans l'ordre où elles apparaissent.

Les principales actions actuellement disponibles sont :

- popup
- inventoryAdd
- inventoryRemove
- condition
- returnToHost

La liste évoluera au fur et à mesure du développement du moteur.


---

# Action : returnToHost

Syntaxe :

```json
{

    "type": "returnToHost",

    "result": "keyFound"

}
```

Description :

Cette action termine immédiatement la scène.

Le moteur émet l'événement :

```
returnToHost
```

Le HostService construit alors automatiquement la réponse destinée au Host.


---

# Réponse produite

Après l'exécution de returnToHost, le HostService construit une réponse contenant l'état final de la scène.

Exemple :

```json
{

    "status": "completed",

    "result": "keyFound",

    "hostId": null,

    "sessionId": null,

    "sceneId": "scene02",

    "inventory": [

        "key"

    ],

    "flags": {}

}
```

Le contenu de cette réponse est défini par le HostProtocol.


---

# Philosophie

Une scène décrit uniquement le gameplay.

Elle ne connaît pas :

- Wix
- iframe
- postMessage
- Electron
- Android
- Base de données
- API externe

Toutes les communications avec l'extérieur sont assurées par le HostService.

Cette séparation garantit que le même scénario peut être exécuté dans différents environnements sans modification.


---

# Évolutions prévues

Le SceneContext pourra être enrichi avec de nouvelles informations sans modifier les scènes existantes.

Exemples :

- variables de scénario
- score
- temps écoulé
- statistiques
- succès (achievements)

Les scènes continueront à manipuler uniquement des actions.

Le Host continuera à recevoir uniquement le contexte final de la scène via le HostProtocol.

> Version : 0.1.0-alpha6  
> Statut : Stable (architecture)


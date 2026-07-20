Ajouter un paragraphe expliquant que receive() est maintenant asynchrone jusqu'à la fin de la scène.

Par exemple :

receive()

↓

construction du contexte

↓

validation

↓

chargement de la scène

↓

installation du listener

↓

start()

↓

attente de returnToHost

↓

construction de la réponse

↓

Promise.resolve()

Et préciser :

HostService ne connaît pas la durée d'une scène. Il attend un événement returnToHost avant de répondre au commanditaire.

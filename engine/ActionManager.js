export default class ActionManager {

    constructor(engine) {

        this.engine = engine;

    }

    init() {

    }

    getActions(object) {

      return object.actions;

    }

    handleActions(actions, object = null) {

        //const actions = this.getActions(object);

        for (const action of actions) {

            switch (action.type) {

                case "popup": 
                    this.engine.popupService.show({
                                                    title: action.title,
                                                    text: action.text,
                                                    image: action.image || object?.image
                                                  });
                    break;

                case "condition":

                    this.engine.conditionService.execute(

                        action,
                        object,
                        (success) => {
                            if (success) {
                                this.handleActions(action.onSuccess, object);
                            } else {
                                this.handleActions(action.onFailure, object);
                            }
                        }

                    );

                    break;

                case "inventoryAdd":
                    this.engine.inventoryService.add(action.item);
                    break;

                case "emit":
                    this.engine.emit(action.event, action);
                    break;

            }
            
        } 

    }


}

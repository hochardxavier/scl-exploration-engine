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
                    this.handleCondition(action, object);
                    break;

                case "inventoryAdd":
                    this.engine.inventoryService.add(action.item);
                    break;

            }
            
        } 

    }

    handleCondition(action, object) {

        this.engine.inputPopupService.show({

            title: action.input.title,
            text: action.input.text,
            placeholder: action.input.placeholder,
            button: action.input.button,

            image: object?.image

        },(value) => {

                if (this.engine.conditionService.check(action.condition, value)) {

                    this.handleActions(action.onSuccess, object);

                } else {

                    this.handleActions(action.onFailure, object);

                }

            }

       );

    }

}

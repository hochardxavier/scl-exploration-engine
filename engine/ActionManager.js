export default class ActionManager {

    constructor(engine) {

        this.engine = engine;

    }

    init() {

    }

    getActions(object) {

      return object.actions;

    }

    handleActions(object) {

        const actions = this.getActions(object);

        for (const action of actions) {

            switch (action.type) {

                case "popup": 
                    this.engine.popupService.show({
                                                    title: action.title,
                                                    text: action.text,
                                                    image: action.image || object.image
                                                  });
                    break;

                case "condition":
                    this.handleCondition(action);
                    break;

            }
            
        } 

    }

    handleCondition(action) {

        this.engine.inputPopupService.show(

            action.input,

            (value) => {

                console.log(value);

            }

        );

    }

}

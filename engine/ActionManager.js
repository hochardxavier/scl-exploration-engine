export default class ActionManager {

    constructor(engine) {

        this.engine = engine;

    }

    init() {

    }

    getActions(object) {

      return object.actions;

    }

    handleActions(actions) {

        for (const action of actions) {

            switch (action.type) {

                case "popup": 
                    this.engine.popupService.show(action.target);
                    break;

            }
            
        }

        

    }

}

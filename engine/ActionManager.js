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
            
        }

        console.log(actions);

    }

}

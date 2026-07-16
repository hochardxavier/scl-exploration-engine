export default class ConditionService {

    constructor(engine) {

        this.engine = engine;

    }

    init() {

    }

    check(condition, value) {

        switch (condition.type) {

            case "equals":

                return value === condition.value;

        }

        return false;

    }

    execute(action, object, callback) {

        switch (action.condition.type) {

            case "equals" :

                this.engine.inputPopupService.show({

                    title: action.input.title,
                    text: action.input.text,
                    placeholder: action.input.placeholder,
                    button: action.input.button,

                    image: object?.image

                },(value) => {

                        if (this.engine.conditionService.check(action.condition, value)) {

                            callback(true);

                        } else {

                           callback(false);

                        }

                    }

               );

            break;

        }

}

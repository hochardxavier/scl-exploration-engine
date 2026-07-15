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

}

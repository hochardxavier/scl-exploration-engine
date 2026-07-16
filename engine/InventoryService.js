export default class InventoryService {

    constructor(engine) {

        this.engine = engine;

    }

    init() {

    }

    add(item) {

        this.engine.sceneContext.inventory.push(item);
        console.log(this.engine.sceneContext.inventory);

    }

    has(item) {

        return this.engine.sceneContext.inventory.includes(item);

    }

    remove(item) {

        const index = this.engine.sceneContext.inventory.indexOf(item);

        if (index !== -1) {

            this.engine.sceneContext.inventory.splice(index, 1);

        }

    }

    clear() {

        this.engine.sceneContext.inventory = [];

    }

}

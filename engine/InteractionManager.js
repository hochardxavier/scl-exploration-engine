export default class InteractionManager {

    constructor(engine) {

        this.engine = engine;

        this.hoveredObject = null;

    }

    init() {

    }

    update() {

        for (const object of this.engine.scene.objects) {

            console.log(object.id);

        }

    }

}

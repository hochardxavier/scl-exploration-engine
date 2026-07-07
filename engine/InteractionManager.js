export default class InteractionManager {

    constructor(engine) {

        this.engine = engine;

        this.hoveredObject = null;

    }

    init() {

    }

    update() {

        for (const object of this.engine.scene.objects) {

            const canvas = this.engine.canvas;

            const width = canvas.width * object.width / 100;
            const height = canvas.height * object.height / 100;

            const centerX = canvas.width * object.x / 100;
            const centerY = canvas.height * object.y / 100;

            const left = centerX - width / 2;
            const right = centerX + width / 2;

            const top = centerY - height / 2;
            const bottom = centerY + height / 2;

            console.log({
                id: object.id,
                left,
                right,
                top,
                bottom
            });

        }

    }

}

export default class InteractionManager {

    constructor(engine) {

        this.engine = engine;
        this.hoveredObject = null;
        this.clickedObject = null;

    }

    init() {

    }

    update() {

        this.hoveredObject = null;
        this.clickedObject = null;

        const input = this.engine.inputManager;

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

                if (
                    input.pointerX >= left &&
                    input.pointerX <= right &&
                    input.pointerY >= top &&
                    input.pointerY <= bottom
                ) {

                    this.hoveredObject = object;

                }

        } //fin de la boucle FOR

        //const input = this.engine.inputManager;

        if (
            input.pointerJustPressed &&
            this.hoveredObject
            ) {
                this.clickedObject = this.hoveredObject;

                const actions = this.engine.actionManager.getActions(
                    this.clickedObject
                );

                console.log(actions);
        } //fin du conditionnel IF

        

    }

}

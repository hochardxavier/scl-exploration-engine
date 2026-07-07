export default class InputManager {

    constructor(engine) {

        this.engine = engine;

        this.pointerX = 0;
        this.pointerY = 0;

    }

    init() {

        const canvas = this.engine.canvas;

        canvas.style.touchAction = "none";

        canvas.addEventListener("pointermove", (event) => {

            this.pointerX = event.clientX;
            this.pointerY = event.clientY;

        });

    }

    update() {

    }

}

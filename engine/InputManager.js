export default class InputManager {

    constructor(engine) {

        this.engine = engine;

        this.pointerX = 0;
        this.pointerY = 0;

        this.previousPointerPressed = false;

    }

    init() {

        const canvas = this.engine.canvas;

        canvas.style.touchAction = "none";

        canvas.addEventListener("pointermove", (event) => {

            this.pointerX = event.clientX;
            this.pointerY = event.clientY;

        });

        canvas.addEventListener("pointerdown", () => {

            this.pointerPressed = true;
            //console.log(this.pointerPressed);

        });

        canvas.addEventListener("pointerup", () => {

            this.pointerPressed = false;
            //console.log(this.pointerPressed);

        });

    }

    update() {

        this.previousPointerPressed = this.pointerPressed;

    }

}

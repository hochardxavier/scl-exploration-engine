export default class InputManager {

    constructor(engine) {

        this.engine = engine;

        this.pointerX = 0;
        this.pointerY = 0;

        this.pointerPressed = false;
        this.pointerJustPressed = false;

    }

    init() {

        const canvas = this.engine.canvas;

        canvas.style.touchAction = "none";

        canvas.addEventListener("pointermove", (event) => {

            const rect = canvas.getBoundingClientRect();

            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;

            this.pointerX = (event.clientX - rect.left) * scaleX;
            this.pointerY = (event.clientY - rect.top) * scaleY;

            //console.log(event.clientX, event.clientY);

        });

        canvas.addEventListener("pointerdown", () => {

            const rect = canvas.getBoundingClientRect();

            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;

            this.pointerX = (event.clientX - rect.left) * scaleX;
            this.pointerY = (event.clientY - rect.top) * scaleY;

            this.pointerPressed = true;
            this.pointerJustPressed = true;
            //console.log(this.pointerJustPressed);

        });

        canvas.addEventListener("pointerup", () => {

            this.pointerPressed = false;
            
            //console.log(this.pointerPressed);

        });

    }

    update() {

        

    }

    endFrame() {

        this.pointerJustPressed = false;
        
    }

}

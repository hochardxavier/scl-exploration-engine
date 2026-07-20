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

            updatePointerPosition(event)

            //console.log(event.clientX, event.clientY);

        });

        canvas.addEventListener("pointerdown", () => {

            updatePointerPosition(event)

            this.pointerPressed = true;
            this.pointerJustPressed = true;
            //console.log(this.pointerJustPressed);

        });

        canvas.addEventListener("pointerup", () => {

            this.pointerPressed = false;
            
            //console.log(this.pointerPressed);

        });

    }

    updatePointerPosition(event) {

        // Les Pointer Events sont exprimés dans les coordonnées du viewport.
        // On les convertit dans le repère logique du canvas afin que le moteur
        // fonctionne correctement sur PC, Android et iOS, quelle que soit
        // la mise à l'échelle appliquée par le navigateur.

        const rect = this.engine.canvas.getBoundingClientRect();

        const scaleX = this.engine.canvas.width / rect.width;
        const scaleY = this.engine.canvas.height / rect.height;

        this.pointerX = (event.clientX - rect.left) * scaleX;
        this.pointerY = (event.clientY - rect.top) * scaleY;

    }

    update() {

        

    }

    endFrame() {

        this.pointerJustPressed = false;
        
    }

}

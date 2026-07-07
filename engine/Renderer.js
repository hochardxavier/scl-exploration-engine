export default class Renderer {

    constructor(engine) {

        this.engine = engine;

    }

    render() {

        this.renderBackground();

        this.renderObjects();

        this.renderFlashlight();

    }

    renderBackground() {

        const ctx = this.engine.ctx;
        const canvas = this.engine.canvas;

        ctx.drawImage(
            this.engine.background,
            0,
            0,
            canvas.width,
            canvas.height
        );

    }

    renderFlashlight() {

        this.engine.flashlight.render();
        
    }

    renderObjects() {

        const ctx = this.engine.ctx;
        const canvas = this.engine.canvas;

        for (const object of this.engine.scene.objects) {

            const width = canvas.width * object.width / 100;
            const height = canvas.height * object.height / 100;

            const x = canvas.width * object.x / 100 - width / 2;
            const y = canvas.height * object.y / 100 - height / 2;

            //objet survolé → +30 % de luminosité.
            if (object === this.engine.interactionManager.hoveredObject) {

                ctx.filter = "brightness(130%)";

            }

            // dessiner l'objet
            ctx.drawImage(
                object.texture,
                x,
                y,
                width,
                height
            );

            // objet normal → aucun filtre
            ctx.filter = "none";

        }

    }
    

} //fin du code

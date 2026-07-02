export default class Renderer {

    constructor(engine) {

        this.engine = engine;

    }

    render() {

        const ctx = this.engine.ctx;
        const canvas = this.engine.canvas;

        // Dessine le fond
        ctx.drawImage(
            this.engine.background,
            0,
            0,
            canvas.width,
            canvas.height
        );

        // Dessine la lampe
        this.engine.flashlight.render();

    }

}

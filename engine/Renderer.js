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

        console.log(this.engine.scene.objects);
        
    }
    
    

}

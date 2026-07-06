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

              const x = canvas.width * object.x / 100 - object.texture.width / 2;     //const x = canvas.width * object.x / 100;
              const y = canvas.height * object.y / 100 - object.texture.height / 2;   //const y = canvas.height * object.y / 100;

            //
            ctx.strokeStyle = "red";
            ctx.strokeRect(
            x,
            y,
            object.texture.width,
            object.texture.height
            );
            //
            
            ctx.drawImage(
                object.texture,
                x,
                y
            );

            console.log(
                "canvas :", canvas.width, canvas.height,
                "| objet :", object.x, object.y,
                "| pixels :", x, y
            );

        }

    }
    

} //fin du code

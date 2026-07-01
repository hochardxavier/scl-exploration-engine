export default class Flashlight {

    constructor(engine) {

        this.engine = engine;

        this.x = 0;
        this.y = 0;

    }

    init() {

        const canvas = this.engine.canvas;

        canvas.addEventListener("mousemove", (event) => {

            const rect = canvas.getBoundingClientRect();

            this.x = event.clientX - rect.left;
            this.y = event.clientY - rect.top;

        });

    }

    update() {

    }

    render() {

        const ctx = this.engine.ctx;

        ctx.beginPath();
        ctx.arc(this.x, this.y, 40, 0, Math.PI * 2);

        ctx.fillStyle = "yellow";
        ctx.fill();

    }

    stop() {

    }

    destroy() {

    }

}

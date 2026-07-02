export default class Flashlight {

    constructor(engine) {

        this.engine = engine;

        this.x = 0;
        this.y = 0;

        this.radius = 120;
        this.intensity = 0.90;

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
        const canvas = this.engine.canvas;

        // Sauvegarde l'état du canvas
        ctx.save();

        // Dessine un voile noir
        ctx.fillStyle = `rgba(0,0,0,${this.intensity})`;
        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        // Le prochain dessin enlèvera des pixels
        ctx.globalCompositeOperation = "destination-out";

        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fill();

        // Retour au mode normal
        ctx.restore();

    }

    stop() {

    }

    destroy() {

    }

}

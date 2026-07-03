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

        canvas.style.touchAction = "none";

        canvas.addEventListener("pointermove", (event) => {

            this.updatePosition(
                event.clientX,
                event.clientY
            );

        });
     }

    updatePosition(clientX, clientY) {

        const rect = this.engine.canvas.getBoundingClientRect();

        this.x = clientX - rect.left;
        this.y = clientY - rect.top;

    }

    update() {

    }

    render() {

        const ctx = this.engine.ctx;
        const canvas = this.engine.canvas;

        // crée un dégradé radial : transparent au centre, noir sur les bords
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0, 
            this.x, this.y, this.radius
        );

        //centre : parfaitement transparent
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)");

        //début du halo : encore presque transparent
        gradient.addColorStop(0.2, "rgba(0, 0, 0, 0)");

        //milieu du halo : commence à s'assombrir
        gradient.addColorStop(0.6, `rgba(0, 0, 0, ${this.intensity * 0.6})`);

        // bord du halo : noir opaque
        gradient.addColorStop(1, `rgba(0, 0, 0, ${this.intensity})`);

        //dessine le voile avec le dégradé
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    }

    stop() {

    }

    destroy() {

    }

}

export default class Engine {

    static VERSION = "0.1.0-alpha1";

    log(message) {
        console.log("SCL Exploration Engine " + ${Engine.VERSION});
        console.log(message);
    }

    constructor() {

        this.canvas = null;
        this.ctx = null;
        
    }

    init() {

        this.log("initialisation du moteur");

        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.start();

    }
    
    start () {
        this.tick();
    }

    tick() {
        this.update();

        this.render();

        requestAnimationFrame(() => this.tick());
    }

    update() {

    }

    render() {

        this.ctx.fillStyle = "#202040";

        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
        
    }

    stop() {

    }

    destroy() {

    }
}

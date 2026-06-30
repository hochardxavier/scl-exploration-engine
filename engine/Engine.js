export default class Engine {

    //static VERSION = "0.1.0-alpha1";

    constructor() {

        this.canvas = null;
        this.ctx = null;
        
    }

    init() {
        console.log("SCL Exploration Engine 0.1.0-alpha1");
        console.log ("controle de déployement - 1); 

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

export default class Engine {

    constructor() {

        this.canvas = null;
        this.ctx = null;
        
    }

    init() {

        console.log("SCL Exploration Engine v0.1.0");

        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.start();

    }
    
    start () {
        this.loop();
    }

    loop() {
        this.update();

        this.render();

        requestAnimationFrame(() => this.loop());
    }

    update() {

    }

    render() {

        this.ctx.fillStyle = "#202040";

        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.heigt
        );
        
    }
}

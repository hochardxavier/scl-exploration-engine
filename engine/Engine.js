export default class Engine {

    constructor() {

    }

    init() {

        console.log("SCL Exploration Engine v0.1.0");

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

    }
}

import SceneLoader from "./SceneLoader.js";
import Flashlight from "./Flashlight.js";

export default class Engine {

    //static VERSION = "0.1.0-alpha1";

    constructor() {

        this.canvas = null;
        this.ctx = null;

        this.sceneLoader = new SceneLoader();
        this.scene = null;
        this.background = new Image();
        this.flashlight = new Flashlight(this);
        
    }

    async init() {

        console.log("SCL Exploration Engine v0.1.0-alpha2");

        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.scene = await this.sceneLoader.load("data/scenes/scene01.json");

        this.background.src = this.scene.background;

        this.background.onload = () => {

            this.flashlight.init();
            this.start();

        };

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

        this.flashlight.update();

    }

    render() {

        this.ctx.drawImage(
            this.background,
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        this.flashlight.render();

    }

    stop() {

    }

    destroy() {

    }
}

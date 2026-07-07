import SceneLoader from "./SceneLoader.js";
import Flashlight from "./Flashlight.js";
import Renderer from "./Renderer.js";
import InputManager from "./InputManager.js";

export default class Engine {

    //static VERSION = "0.1.0-alpha1";

    constructor() {

        this.canvas = null;
        this.ctx = null;

        this.renderer = new Renderer(this);
        this.sceneLoader = new SceneLoader();
        this.scene = null;
        this.background = new Image();
        this.flashlight = new Flashlight(this);
        this.inputManager = new InputManager(this);
        this.interactionManager = new InteractionManager(this);
        
    }

    async init() {

        console.log("SCL Exploration Engine v0.1.0-alpha5 --- D0");

        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.inputManager.init();
        this.interactionManager.init();

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

        this.inputManager.update();
        this.interactionManager.update();
        this.flashlight.update();

    }

    render() {

      this.renderer.render();  

    }

    stop() {

    }

    destroy() {

    }
}

import SceneLoader from "./SceneLoader.js";
import Flashlight from "./Flashlight.js";
import Renderer from "./Renderer.js";
import InputManager from "./InputManager.js";
import InteractionManager from "./InteractionManager.js";
import ActionManager from "./ActionManager.js";
import PopupService from "./PopupService.js";
import InputPopupService from "./InputPopupService.js";
import SceneContext from "./SceneContext.js";
import InventoryService from "./InventoryService.js";
import ConditionService from "./ConditionService.js";

export default class Engine {

    //static VERSION = "0.1.0-alpha1";

    constructor() {

        // canvas
        this.canvas = null;
        this.ctx = null;

        // Contexte d'exécution
        this.sceneContext = new SceneContext();

        // Ressources
        this.scene = null;
        this.background = new Image();

        // Chargement
        this.sceneLoader = new SceneLoader();

        // Rendu
        this.renderer = new Renderer(this);
        this.flashlight = new Flashlight(this);

        // Entrées
        this.inputManager = new InputManager(this);
        this.interactionManager = new InteractionManager(this);

        // Logique
        this.actionManager = new ActionManager(this);

        // Services
        this.popupService = new PopupService(this);
        this.inputPopupService = new InputPopupService(this);
        this.inventoryService = new InventoryService(this);
        this.conditionService = new ConditionService(this);
        
    }

    async init() {

        console.log("SCL Exploration Engine v0.1.0-alpha6 --- D0");

        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.inputManager.init();
        this.interactionManager.init();

        this.actionManager.init();
        this.popupService.init();
        this.inputPopupService.init();

        this.inventoryService.init();
        this.conditionService.init();

        //this.scene = await this.sceneLoader.load("data/scenes/scene02.json"); envoyé vers loadScene()

        //this.background.src = this.scene.background; envoyé vers loadScene()

        /*this.background.onload = () => {

            this.flashlight.init();
            this.start();

        };*/

        //await this.loadScene("data/scenes/scene02.json");

        //this.start();

    }

    async loadScene() {

        //const scenePath =
        //    `data/scenes/${this.sceneContext.sceneId}.json`;

        this.scene = await this.sceneLoader.load(this.sceneContext.sceneId);
        this.background.src = this.scene.background;

        await new Promise((resolve) => {

            this.background.onload = () => {

                this.flashlight.init();

                resolve();

            };

        });

    }
    
    start () {
        this.tick();
    }

    tick() {
        this.update();
        this.render();
        this.inputManager.endFrame();

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

    loadContext(context) {

        this.sceneContext.load(context);

    }

    stop() {

    }

    destroy() {

    }
}

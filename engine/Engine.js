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

        // Canvas
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

        // Retour
        this.listeners = {};
        
    }

    async init() {

        console.log("SCL Exploration Engine v0.1.0-alpha6 --- D0");

        // Canvas
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        //Entrées
        this.inputManager.init();
        this.interactionManager.init();

        // Logique
        this.actionManager.init();

        // Services
        this.popupService.init();
        this.inputPopupService.init();
        this.inventoryService.init();
        this.conditionService.init();

    }

    loadContext(context) {

        this.sceneContext.load(context);

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

    on(eventName, callback) {

        this.listeners[eventName] = callback;

    }

    emit(eventName, data = null) {

        const listener = this.listeners[eventName];

        if (listener) {

            listener(data);

        }

    }

    getContext() {

        return structuredClone(this.sceneContext);

    }

    stop() {

    }

    destroy() {

    }
}

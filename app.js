import Engine from "./engine/Engine.js";
import HostService from "./engine/HostService.js";

const engine = new Engine();

await engine.init();

const hostService = new HostService(engine);

// TODO : Remplacer ce contexte de test par le protocole de communication.
console.log ("TODO : Remplacer ce contexte de test par le protocole de communication -- apps.js ligne10"); 
const context = {
    sceneId: "scene02"
};

await hostService.receive(context);


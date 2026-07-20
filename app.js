import Engine from "./engine/Engine.js";
import HostService from "./HostService.js";

const engine = new Engine();

await engine.init();

const hostService = new HostService(engine);

await hostService.receive(context);


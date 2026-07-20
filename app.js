import Engine from "./engine/Engine.js";
import HostService from "./engine/HostService.js";
import BrowserHostAdapter from "./host/BrowserHostAdapter.js";

const engine = new Engine();

await engine.init();

const hostService = new HostService(engine);

const hostAdapter = new BrowserHostAdapter(hostService);

hostAdapter.start();


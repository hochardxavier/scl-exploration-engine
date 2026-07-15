import Engine from "./engine/Engine.js";

const engine = new Engine();

await engine.init();

engine.loadContext({

    hostId: "dev",

    sessionId: "test",

    sceneId: "scene02",

    inventory: [],

    flags: {}

});

await engine.loadScene();
engine.start();


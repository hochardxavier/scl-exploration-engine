export default class SceneContext {

    constructor() {

        this.hostId = null;
        this.sessionId = null;
        this.sceneId = null;
        this.inventory = [];
        this.flags = {};

    }

    load(context) {

        this.hostId = context.hostId ?? null;
        this.sessionId = context.sessionId ?? null;
        this.sceneId = context.sceneId ?? null;

        this.inventory = context.inventory ?? [];
        this.flags = context.flags ?? {};

    }

    clear() {

        this.hostId = null;
        this.sessionId = null;
        this.sceneId = null;

        this.inventory = [];
        this.flags = {};

    }

}

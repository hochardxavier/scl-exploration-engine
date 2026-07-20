export default class HostService {

    constructor(engine) {

        this.engine = engine;

    }

    

    async receive(request) {

        const context = this.buildContext(request);

        this.validateContext(context);

        this.engine.loadContext(context);

        await this.engine.loadScene();

        this.engine.start();

    }

    buildContext(request) {

        return {

            flashlightIntensity: 90,

            inventory: [],

            flags: {},

            ...request

        };

    }

    validateContext(context) {

        if (!context.sceneId) {

            throw new Error("HostProtocolError : Missing required property 'sceneId'.");

        }

    }

  

}

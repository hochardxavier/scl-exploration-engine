export class HostService {

    constructor(engine) {

        this.engine = engine;

    }

    receive(request) {

      async receive(request) {

        this.engine.loadContext(request);

        await this.engine.loadScene();

        this.engine.start();

    }

  }

}

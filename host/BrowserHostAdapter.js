export default class BrowserHostAdapter {

    constructor(hostService) {

        this.hostService = hostService;

    }

    start() {

        // Informe le Host que le moteur est prêt.
        this.send({
            type: "engine-ready"
        });

        // Ecoute les messages du Host.
        window.addEventListener("message", async (event) => {

            await this.handleMessage(event.data);

        });

    }

    async handleMessage(message) {

        switch (message.type) {

            case "launch":

                const response = await this.hostService.receive(
                    message.payload
                );

                this.send({
                    type: "launch-completed",
                    payload: response
                });

                break;

            default:

                console.warn(
                    `Message inconnu : ${message.type}`
                );

        }

    }

    async handleLaunch(payload) {

        const response =
            await this.hostService.receive(payload);

        this.send(response);

    }

    send(message) {

        window.parent.postMessage(message, "*");

    }

}

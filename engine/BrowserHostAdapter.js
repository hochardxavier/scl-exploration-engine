class BrowserHostAdapter {

    constructor(hostService){

        this.hostService = hostService;

    }

    start(){

        // écoute les messages

    }

    async onLaunch(payload){

        const response =
            await this.hostService.receive(payload);

        // renvoie la réponse

    }

}

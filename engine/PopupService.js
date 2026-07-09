// service du ActionManager

export default class PopupService {

    constructor(engine) {

        this.engine = engine;

    }

    init() {

    }

    show(data) {

        const popup = document.createElement("div");

        document.body.appendChild(popup);

    }

}

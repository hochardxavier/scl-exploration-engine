export default class InputPopupService {

    constructor(engine) {

        this.engine = engine;

    }

    init() {

    }

    show(inputData, callback) {

        //console.log(inputData);

        //callback("4268");

        const overlay = document.createElement("div");
        overlay.className = "scl-popup-overlay";

        const popup = document.createElement("div");
        popup.className = "scl-popup";

        const title = document.createElement("h2");

        const text = document.createElement("p");

        const input = document.createElement("input");

        const button = document.createElement("button");
         

    }

}

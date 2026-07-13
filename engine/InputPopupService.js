export default class InputPopupService {

    constructor(engine) {

        this.engine = engine;
        this.currentPopup = null;

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
        input.type = "text";
        const button = document.createElement("button");

        title.textContent = inputData.title;
        text.textContent = inputData.text;
        input.placeholder = inputData.placeholder;
        button.textContent = inputData.button;

        popup.appendChild(title);
        popup.appendChild(text);
        popup.appendChild(input);
        popup.appendChild(button);

        overlay.appendChild(popup);
        
        document.body.appendChild(overlay);

        this.currentPopup = overlay;

        button.addEventListener("click", () => {
            callback(input.value);
            overlay.remove();
            this.currentPopup = null;
        });

    }

}

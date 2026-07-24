// service du ActionManager

export default class PopupService {

    constructor(engine) {

        this.engine = engine;

        this.currentPopup = null;

    }

    init() {

    }

    show(data) {

        if (this.currentPopup !== null) {
            return;
        }
        
        const overlay = document.createElement("div");
        overlay.className = "scl-popup-overlay";

        const popup = document.createElement("div");
        popup.className = "scl-popup";

        const title = document.createElement("h2");
        title.textContent = data.title;

        const text = document.createElement("p");
        text.textContent = data.text;

        const button = document.createElement("button");
        button.textContent = "Fermer";

        if (data.image) {
            const image = document.createElement("img");
            image.src = data.image;
            popup.appendChild(image);
        }
        
        popup.appendChild(title);
        popup.appendChild(text);
        popup.appendChild(button);
        

        overlay.appendChild(popup);
        
        document.body.appendChild(overlay);

        this.currentPopup = overlay;

        button.addEventListener("click", () => {
            overlay.remove();
            this.currentPopup = null;
        });

    }

    close() {

        this.hide();

        if (this.options.onClose) {
            this.engine.actionHandler.handleActions(this.options.onClose);
        }
    }

}

// service du ActionManager

export default class PopupService {

    constructor(engine) {

        this.engine = engine;

    }

    init() {

    }

    show(data) {

        const popup = document.createElement("div");

        const title = document.createElement("h2");
        title.textContent = data.title;

        const text = document.createElement("p");
        text.textContent = data.text;

        const button = document.createElement("button");
        button.textContent = "Fermer";

        popup.appendChild(title);
        popup.appendChild(text);
        popup.appendChild(button);
        
        document.body.appendChild(popup);

        button.addEventListener("click", () => {
            popup.remove();
        });

    }

}

// service du ActionManager

export default class PopupService {

    constructor(engine) {

        this.engine = engine;

    }

    init() {

    }

    show(data) {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "20px";
        popup.style.left = "20px";
        popup.style.background = "white";
        popup.style.border = "2px solid black";
        popup.style.padding = "20px";
        popup.style.zIndex = "9999";

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

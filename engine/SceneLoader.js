import Scene from "./Scene.js";

export default class SceneLoader {

    async load(path) {

        const response = await fetch(path);

        const data = await response.json();

        for (const object of data.objects) {

            object.texture = await this.loadTexture(object.image);

        }

        return new Scene(data);

    }

    async loadTexture(path) {

        return new Promise((resolve, reject) => {
        
            const image = new Image();

            image.onload = () => resolve(image);

            image.onerror = () => reject(
                new Error(`Impossible de charger : ${path}`)
            );
        
            image.src = path;

        });

    }

}

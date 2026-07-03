import Scene from "./Scene.js";

export default class SceneLoader {

    async load(path) {

        const response = await fetch(path);

        const data = await response.json();

        return new Scene(data);

    }

    async loadTexture(path) {

    }

}

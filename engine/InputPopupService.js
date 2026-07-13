export default class InputPopupService {

    constructor(engine) {

        this.engine = engine;

    }

    init() {

    }

    show(inputData, callback) {

        //console.log(inputData);

        //callback("4268");

        this.engine.inputPopupService.show(

            action.input,

            (value) => {

                console.log("Valeur reçue :", value);

            }

        ); 

    }

}

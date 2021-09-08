import { DAYSOFWEEK } from "../../services/config.js";
import { BaseDateComponent } from "../basedatecomponent.js";

export class DaysOfWeek extends BaseDateComponent{
    connectedCallback() {
        let i = 0
        DAYSOFWEEK.forEach(element => {
            const div = document.createElement("div");
            const texto = document.createTextNode(DAYSOFWEEK[i]);
            div.appendChild(texto);
            this._shadow.appendChild(div);
            i++
        });
    }
}
customElements.define("cap-daysofweek", DaysOfWeek)
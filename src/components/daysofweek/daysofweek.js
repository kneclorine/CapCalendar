import { DAYSOFWEEK } from "../../services/config.js";
import { BaseDateComponent } from "../basedatecomponent.js";
import css from './daysofweek.css.js'

export class DaysOfWeek extends BaseDateComponent{
    connectedCallback() {
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets,css];
        const daysDiv = document.createElement("div");
        daysDiv.classList.add("daysofweek");
        let i = 0
        DAYSOFWEEK.forEach(element => {
            const div = document.createElement("div");
            const texto = document.createTextNode(DAYSOFWEEK[i]);
            div.appendChild(texto);
            daysDiv.appendChild(div);
            i++
        });
        this._shadow.appendChild(daysDiv);
    }
}
customElements.define("cap-daysofweek", DaysOfWeek)
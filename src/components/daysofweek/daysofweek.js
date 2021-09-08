import { DAYSOFWEEK } from "../../services/config.js";
import { BaseDateComponent } from "../basedatecomponent.js";
import css from './daysofweek.css.js'

export class DaysOfWeek extends BaseDateComponent{
    connectedCallback() {
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets,css];
        let i = 0
        DAYSOFWEEK.forEach(element => {
            const texto = document.createTextNode(DAYSOFWEEK[i]);
            const div = document.createElement('div')
            div.appendChild(texto);
            this._shadow.appendChild(div);
            i++
        });
    }
} 
customElements.define("cap-daysofweek", DaysOfWeek)
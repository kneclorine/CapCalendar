import { DAYSOFWEEK } from "../../services/config.js";
import css from './daysofweek.css.js';
import cssBase from '../basedatecomponent.css.js';

export class DaysOfWeek extends HTMLElement{
    constructor(){
        super();
        this._shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this._shadow.adoptedStyleSheets = [cssBase, css];
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
import { DAYSOFWEEK } from "../../services/config.js";
import css from './daysofweek.css.js';
import cssBase from '../basedatecomponent.css.js';

export class DaysOfWeek extends HTMLElement{
    constructor(){
        super();
        this._shadow = this.attachShadow({mode: "open"});
        this._create();
    }

    _create(){
        this._shadow.adoptedStyleSheets = [cssBase, css];
        DAYSOFWEEK.forEach(element => {
            const texto = document.createTextNode(element);
            const div = document.createElement('div')
            div.appendChild(texto);
            this._shadow.appendChild(div);
        });
    }
} 
customElements.define("cap-daysofweek", DaysOfWeek)
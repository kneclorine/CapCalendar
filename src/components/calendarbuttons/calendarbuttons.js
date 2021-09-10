import { CHANNELS } from "../../services/config.js";
import pubsub from "../../services/pubsub.js";
import css from "./calendarbuttons.css.js";

const BUTTON = Object.freeze({
    UP: 1,
    DOWN: -1
})
const ACTION_IS_NULL = "El valor de Action no es correcto";

export class CalendarButtons extends HTMLElement {
    constructor(){
        super();
        this._action = BUTTON.UP;
        this._shadow = this.attachShadow({mode: "open"});
    }
    static get observedAttributes() {
        return ['action'];
      }
    get action(){
        return this._action;
    }
    set action(value){
        this._action = value;
    }
    _create(){
        this._shadow.adoptedStyleSheets = [css];
        let button = document.createElement("button");
        button.setAttribute("action", this._action);
        button.appendChild(document.createTextNode("V"));
        this._shadow.appendChild(button);
    }
    _handlerClick(ev){
        ev.stopPropagation();
        pubsub.emit(CHANNELS.CHANGEMONTH, this.action);
    }
    connectedCallback(){
        this.addEventListener("click", this._handlerClick);
    }
    disconnectedCallback(){
        this.removeEventListener("click", this._handlerClick);
    }
    attributeChangedCallback(name, oldValue, newValue){
        let action = null;
        if (oldValue != newValue && newValue) {
            action = BUTTON[newValue.toUpperCase()];    
        }
        if(!action){
            throw ACTION_IS_NULL;
        }
        this._action = action;
        this._create();
    }
}
customElements.define("cap-calendarbutton", CalendarButtons);
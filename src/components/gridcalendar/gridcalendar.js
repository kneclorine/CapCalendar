import { DateService } from "../../services/dateservice.js";
import { FormatService } from "../../services/formatservice.js";
import pubSub from "../../services/pubsub.js";
import { CHANNELS } from "../../services/config.js";
import css from "./gridcalendar.css.js";
import css2 from "./gridcalendar2.css.js";


export class GridCalendar extends HTMLElement{
    constructor(){
        super();
        this.date = new Date();
        this._disposables = [];
        this._shadow = this.attachShadow({mode: "open"});
    }
    _formatDate(date){
        return FormatService.getDay(date);
    }
    
    connectedCallback() {
        let elementDays = [];
        elementDays = DateService.getMonthDays(this.date);
        elementDays.forEach(element => {
            let div = document.createElement('div');
            const texto = document.createTextNode(this._formatDate(element.date));
            div.appendChild(texto);
            div.addEventListener("click", ()=>{pubSub.emit(CHANNELS.CHANGESELECTEDDAY,element.date)},false);
            div.addEventListener("click", ()=>{div.classList.add("selected")},false);
            div.addEventListener("click", ()=>{this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets,css2]},false);
            const disposable = pubSub.on(CHANNELS.CHANGESELECTEDDAY, (element) => {div.classList.remove("selected"),element.isSelected=false});
        this._disposables.push(disposable);
            if(!element.isMonth){
                div.classList.add("notMonth");
            } 
            if(!element.isSelected){
                div.classList.remove("selected");
            }
            this._shadow.appendChild(div);
            this._shadow.adoptedStyleSheets = [css];
        });

    }
    
 
}

customElements.define("cap-calendar", GridCalendar);
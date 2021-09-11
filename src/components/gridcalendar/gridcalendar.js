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
    
    _create(){
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
            if(element.isToday){
                div.classList.add("today");
            }
            this._shadow.appendChild(div);
            this._shadow.adoptedStyleSheets = [css];
        });
    }

    _update(){
        while (this._shadow.firstChild) {
            this._shadow.removeChild(this._shadow.lastChild);
        }
        this._create();
    }

    connectedCallback() {
        const disposable = pubSub.on(CHANNELS.CHANGEMONTH, (diff) => {
            this.date = DateService.addMonth(this.date, diff);
            this._update();
        });
        const disposable2 = pubSub.on(CHANNELS.CHANGEDATE, (newDate) => {
            if(this.date.getMonth() == newDate && this.date.getDay != newDate.getDay()){
                this.date = newDate;
                this._update();
            }
        });
        this._disposables.push(disposable, disposable2);
        this._create();
    }
}
customElements.define("cap-calendar", GridCalendar);
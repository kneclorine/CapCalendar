import { DateService } from "../../services/dateservice.js";
import { FormatService } from "../../services/formatservice.js";
import pubSub from "../../services/pubsub.js";
import { CHANNELS } from "../../services/config.js";
import css from "./gridcalendar.css.js";


export class GridCalendar extends HTMLElement{
    constructor(){
        super();
        this.date = new Date();
        this._selectedDate = new Date();
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
            div.addEventListener("click", ()=>{this._listener(div,element)},false);
            const disposable = pubSub.on(CHANNELS.CHANGESELECTEDDAY, (element) => {this._changeSelected(div,element)});
            this._disposables.push(disposable);
            if(!element.isMonth){
                div.classList.add("notMonth");
            } 
            if(!element.isSelected){
                div.classList.remove("selected");
                element.isSelected=false;
            }
            if(element.isToday){
                div.classList.add("today");
            }
            if(DateService.isToday(this._selectedDate, element.date)) {
                div.classList.add("selected");
                element.isSelected = true;
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
            if(this.date.getMonth() == newDate && this.date.getDay !== newDate.getDay()){
                this.date = newDate;
                this._update();
            }
        });
        this._disposables.push(disposable, disposable2);
        this._create();
    }
    disconnectedCallback() {
        this._removeChildren();
        this._clearDisposables();
    }
    _clearDisposables(){
        this._disposables.forEach(disposable=>{
            disposable && disposable();
        })
        this._disposables = [];
    }
    _removeChildren(){
        this._shadow.textContent = "";
    }
    _listener(div,element){
        pubSub.emit(CHANNELS.CHANGESELECTEDDAY,element.date);
        div.classList.add("selected");
        this._selectedDate = element.date;
        element.isSelected = true;
    }
    _changeSelected(div,element){
        div.classList.remove("selected");
        element.isSelected=false;
    }
}
customElements.define("cap-calendar", GridCalendar);
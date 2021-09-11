import css from './calendar.css.js';
export class Calendar extends HTMLElement{
    constructor(){
        super();
        this._shadow = this.attachShadow({mode: "open"});
        this._create();
    }

    _create(){
        this._shadow.adoptedStyleSheets = [css];
        let clock = document.createElement('cap-clock');
        this._shadow.appendChild(clock);
        let sysDate = document.createElement('cap-sysdate');
        this._shadow.appendChild(sysDate);
        let monthDate = document.createElement('cap-monthdate');
        this._shadow.appendChild(monthDate);
        let calendarButtonDown = document.createElement('cap-calendarbutton');
        calendarButtonDown.setAttribute("action", "down");
        this._shadow.appendChild(calendarButtonDown);
        let calendarButtonUp = document.createElement('cap-calendarbutton');
        calendarButtonUp.setAttribute("action", "up");
        this._shadow.appendChild(calendarButtonUp);
        let daysOfWeek = document.createElement('cap-daysofweek');
        this._shadow.appendChild(daysOfWeek);
        let calendar = document.createElement('cap-calendar');
        this._shadow.appendChild(calendar);
        let selectedDate = document.createElement('cap-selecteddate');
        this._shadow.appendChild(selectedDate);
    }
} 
customElements.define("cap-finalcalendar", Calendar)
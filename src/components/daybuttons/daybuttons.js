import pubSub from '../../services/pubsub.js';
import {CHANNELS} from '../../services/config.js';
import { FormatService } from '../../services/formatservice.js'
import { Day } from './day.js';
export class DayButtons extends HTMLElement{
    constructor(){
        super();
        this.day = new Day();
    }
    _formatDate() {
        return FormatService.getDay(this.day._showDate());
    }
    connectedCallback(){
        const texto = document.createTextNode(this._formatDate());
        this.appendChild(texto);
        //this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets,css];
        this.addEventListener("click", ()=>{pubSub.emit(CHANNELS.CHANGESELECTEDDAY,this.day._showDate())},false);
    }
}
customElements.define("cap-day", DayButtons);
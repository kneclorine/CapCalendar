import { BaseDateComponent } from "../basedatecomponent.js";
import pubSub from '../../services/pubsub.js';
import {CHANNELS} from '../../services/config.js';
import { FormatService } from '../../services/formatservice.js'
export class DayButtons extends BaseDateComponent {
    _formatDate() {
        return FormatService.getDay(this._date.setDate(this._date.getDate()+1))
    }
    connectedCallback(){
        const texto = super._create();
        //this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets,css];
        this.addEventListener("click", ()=>{pubSub.emit(CHANNELS.CHANGESELECTEDDAY,this._date)},false);
    }
}
customElements.define("cap-day", DayButtons);
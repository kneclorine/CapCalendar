import { FormatService } from "../../services/formatservice.js";
import pubSub from '../../services/pubsub.js'
import { CHANNELS } from "../../services/config.js";
import { DateService } from "../../services/dateservice.js";
import { BaseDateComponent } from "../basedatecomponent.js";

export class MonthDate extends BaseDateComponent {
    _formatDate() {
        return FormatService.getDateMonth(this._date)
    }
    connectedCallback() {
       const texto = super._create(this._date)
       const disposable = pubSub.on(CHANNELS.CHANGEDATE, (date) => {
            if (!DateService.isSameMonth(date, new Date())) {
                super._update(texto,date)
            } 
        })
        this._disposables.push(disposable);
    }
}
customElements.define("cap-monthdate", MonthDate);

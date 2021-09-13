import { FormatService } from "../../services/formatservice.js";
import pubSub from '../../services/pubsub.js'
import { CHANNELS } from "../../services/config.js";
import { DateService } from "../../services/dateservice.js";
import { BaseDateComponent } from "../basedatecomponent.js";
import css from './monthdate.css.js';

export class MonthDate extends BaseDateComponent {
    _formatDate() {
        return FormatService.getDateMonth(this._date)
    }
    connectedCallback() {
       const texto = super._create()
       const disposableDate = pubSub.on(CHANNELS.CHANGEDATE, (date) => {
            if (!DateService.isSameMonth(date, new Date())) {
                super._update(texto,date)
            }
        })
        const disposableMonth = pubSub.on(CHANNELS.CHANGEMONTH, (diff) => {
            let newDate = this._date;
            newDate.setMonth(this._date.getMonth() + diff);
            super._update(texto,newDate)
        })
        this._disposables.push(disposableDate, disposableMonth);
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
}
customElements.define("cap-monthdate", MonthDate);
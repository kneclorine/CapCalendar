import { FormatService } from "../../services/FormatService.js";
import pubSub from '../../services/PubSub.js'
import { CHANNELS } from "../../services/Config.js";
import { DateService } from "../../services/DateService.js";
import { BaseDateComponent } from "../basedatecomponent.js";

export class SystemDate extends BaseDateComponent {
  _formatDate() {
    return FormatService.getDate(this._date);
  }
  connectedCallback() {
    const texto = super._create(this._date);
    const disposable = pubSub.on(CHANNELS.CHANGEDATE, (date) => {
      if (!DateService.isToday(date, new Date())) {
        super._update(texto, date)
      }
    });
    this._disposables.push(disposable);

  }
}
customElements.define("cap-sysdate", SystemDate);

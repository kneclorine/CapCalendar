import { FormatService } from '../../services/formatservice.js'
import pubSub from '../../services/pubsub.js'
import { CHANNELS } from '../../services/config.js'
import { BaseDateComponent } from '../basedatecomponent.js';
export class Clock extends BaseDateComponent {
    _formatDate() {
        return FormatService.getTime(this._date)
    }
    connectedCallback() {
        const texto = super._create(this._date);
        const disposable = pubSub.on(CHANNELS.CHANGEDATE, (date) => super._update(texto,date));
        this._disposables.push(disposable);
    }
 
}
customElements.define("cap-clock", Clock);

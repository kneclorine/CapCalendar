import { FormatService } from '../../services/formatservice.js'
import pubSub from '../../services/pubsub.js'
import { CHANNELS } from '../../services/config.js'
import { BaseDateComponent } from '../basedatecomponent.js';
export class SelectedDate extends BaseDateComponent {
    _formatDate() {
        return FormatService.getSelectedDate(this._date)
    }
    connectedCallback() {
        const texto = super._create(this._date);
        const disposable = pubSub.on(CHANNELS.CHANGESELECTEDDAY, (date) => super._update(texto,date));
        this._disposables.push(disposable);
    }
 
}
customElements.define("cap-selecteddate", SelectedDate);
import { FormatService } from '../../services/FormatService.js'
import pubSub from '../../services/PubSub.js'
import { CHANNELS } from '../../services/Config.js'
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
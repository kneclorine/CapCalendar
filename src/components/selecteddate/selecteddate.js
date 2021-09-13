import { FormatService } from '../../services/formatservice.js'
import pubSub from '../../services/pubsub.js'
import { CHANNELS } from '../../services/config.js'
import { BaseDateComponent } from '../basedatecomponent.js';
import css from './selecteddate.css.js';
export class SelectedDate extends BaseDateComponent {
    _formatDate() {
        return FormatService.getSelectedDate(this._date)
    }
    connectedCallback() {
        const texto = super._create();
        const disposable = pubSub.on(CHANNELS.CHANGESELECTEDDAY, (date) => super._update(texto,date));
        this._disposables.push(disposable);
        this._shadow.adoptedStyleSheets = [css];
    }
}
customElements.define("cap-selecteddate", SelectedDate);
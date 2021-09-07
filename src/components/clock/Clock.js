import {FormatService} from '../../services/FormatService.js'
import pubSub from '../../services/PubSub.js'
import {CHANNELS} from '../../services/Config.js'

export class Clock extends HTMLElement{
    constructor(){
        super();
        this.date = new Date();
        this._texto = null;
        this._dispose = pubSub.on(CHANNELS.CHANGEDATE,(date)=>{
            this.date = date;
            this._texto.data = FormatService.getTime(this.date);
        })
    }
    connectedCallback(){
        const shadow = this.attachShadow({mode:"closed"})
        const div = document.createElement("div");
        this._texto = document.createTextNode(FormatService.getTime(this.date));
        div.appendChild(this._texto);
        shadow.appendChild(div);
    }
    disconnectedCallback(){
        this._dispose();
    }
}
customElements.define("cap-clock",Clock);
export class BaseDateComponent extends HTMLElement {
    constructor() {
        super();
        this._disposables = [];
        this._date = new Date();
        this._shadow = this.attachShadow({mode: "open"});

    }
    _create() {
        const texto = document.createTextNode(this._formatDate());
        this._shadow.appendChild(texto);
        return texto;
    }
    _update(node, date) {
        this._date = date;
        node.data = this._formatDate();
    }
    disconnectedCallback() {
        this._removeChildren();
        this._clearDisposables();
    }
    _clearDisposables(){
        this._disposables.forEach(disposable=>{
            disposable && disposable();
        })
        this._disposables = [];
    }
    _removeChildren(){
        this._shadow.textContent = "";
    }
    _formatDate() {
        throw "Method not implemented."
    } 
}
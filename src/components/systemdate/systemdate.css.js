const sheet = new CSSStyleSheet();
sheet.replace(`:host {
    color: var(--systemdate-color); 
    border-bottom: 0.05em solid var(--border-color);
}
:host(:hover) {
    color: var(--systemdate-hover-color);
}
`)
export default sheet
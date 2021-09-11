const sheet = new CSSStyleSheet();
sheet.replace(`:host {
    color: var(--systemdate-color);
    border-bottom: 0.05em solid var(--border-color);
    padding: 0 0 1em 1em;
    cursor: pointer;
    display: block;
}
:host(:hover) {
    color: var(--systemdate-hover-color);
}
`)
export default sheet
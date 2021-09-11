const sheet = new CSSStyleSheet();
sheet.replace(`:host {
    color: var(--systemdate-color); 
    text-decoration: underline;
    border-bottom: 0.05em solid var(--border-color);
    cursor: pointer;
}
:host(:hover) {
    color: var(--systemdate-hover-color);
}
`)
export default sheet
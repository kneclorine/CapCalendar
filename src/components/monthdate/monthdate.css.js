const sheet = new CSSStyleSheet();
sheet.replace(`:host {
    color: var(--monthdate-color);
    display: inline-block;
    width: 13.2em;
    padding: 1em;
}
:host(:hover) {
    color: var(--main-font-color);
}
`)
export default sheet
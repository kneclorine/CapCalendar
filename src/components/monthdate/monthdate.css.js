const sheet = new CSSStyleSheet();
sheet.replace(`:host {
    color: var(--monthdate-color);
    flex-grow: 1;
    padding-bottom: 0;
}
:host(:hover) {
    color: var(--main-font-color);
}
`)
export default sheet
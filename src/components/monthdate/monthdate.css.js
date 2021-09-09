const sheet = new CSSStyleSheet();
sheet.replace(`:host {
    color: #E6E6E6;
    flex-grow: 1;
}
:host(:hover) {
    color: #FFFFFF;
}
`)
export default sheet
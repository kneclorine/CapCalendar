const sheet = new CSSStyleSheet();
sheet.replace(`:host {
    border-top: 0.05em solid darkgray;
    color: #E6E6E6;
}
:host(:hover) {
    color: #FFFFFF;
}
`)
export default sheet
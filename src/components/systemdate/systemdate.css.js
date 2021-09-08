const sheet = new CSSStyleSheet();
sheet.replace(`:host {
    color: lightblue; 
}
:host(:hover) {
    color: grey;
}
`)
export default sheet
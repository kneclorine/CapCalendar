const sheet = new CSSStyleSheet();
sheet.replace(`:host {
    color: lightblue; 
    border-bottom: 0.05em solid darkgray;
}
:host(:hover) {
    color: grey;
}
`)
export default sheet
const sheet = new CSSStyleSheet();
sheet.replace(`:host{
    color: white;
    background-color: var(--main-bg-color);
    font-family: sans-serif;
    padding: 0.5em 1em;
    display: block;
}
`)
export default sheet
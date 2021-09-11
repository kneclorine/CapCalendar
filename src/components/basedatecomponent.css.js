const sheet = new CSSStyleSheet();
sheet.replace(`:host{
    color: var(--main-font-color);
    background-color: var(--main-bg-color);
    font-family: sans-serif;
    padding: 1em;
    display: block;
    cursor: default;
}
`)
export default sheet
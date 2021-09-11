const sheet = new CSSStyleSheet();
sheet.replace(`:host{
    color: var(--main-font-color);
    background-color: var(--main-bg-color);
    font-family: sans-serif;
    display: block;
    cursor: default;
    width: 22em;
}`)
export default sheet
const sheet = new CSSStyleSheet();
sheet.replace(`:host{
    display: grid;
    gap: 2em;
    grid-template-columns: repeat(7, 1em);
    padding-left: 1.2em;
    text-align: center;
}
`)
export default sheet
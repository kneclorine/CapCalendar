const sheet = new CSSStyleSheet();
sheet.replace(`:host{
    display: grid;
    gap: 2em;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
}
`)
export default sheet
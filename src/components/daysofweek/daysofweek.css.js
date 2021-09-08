const sheet = new CSSStyleSheet();
sheet.replace(`.daysofweek{
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(7, 1em);
}
`)
export default sheet
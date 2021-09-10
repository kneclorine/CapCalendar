const sheet = new CSSStyleSheet();
sheet.replace(`:host{
    color: white;
    background-color: rgb(70,70,70);
    font-family: sans-serif;
    display: grid;
    padding: 0.5em 0.7em;
    gap: 2em;
    grid-template-columns: repeat(7,1em);
    text-align: center;
    }
    :host .notMonth{
        color:grey;
    }
    div{
        width: 1.5em;
        height: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `)
export default sheet
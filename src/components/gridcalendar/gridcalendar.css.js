const sheet = new CSSStyleSheet();
sheet.replace(`:host{
    border-bottom: 0.05em solid var(--border-color);
    color: var(--main-font-color);
    background-color: var(--main-bg-color);
    font-family: sans-serif;
    display: grid;
    padding: 1em 0.7em;
    gap: 0.8em 2em;
    grid-template-columns: repeat(7,1em);
    text-align: center;
    cursor: default;
    }
    :host .notMonth{
        color: var(--not-monthday-color);
    }
    :host .today{
        background-color: var(--day-color);
    }
    div{
        width: 2em;
        height: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div:hover{
        box-sizing: border-box;
        border: 0.05em solid var(--main-font-color);
    }
    div.selected{
        box-sizing: border-box;
        border: 0.15em solid var(--day-color);
    }
    `)
export default sheet
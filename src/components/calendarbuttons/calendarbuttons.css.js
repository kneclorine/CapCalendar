const sheet = new CSSStyleSheet();
sheet.replace(`
:host{
    background-color: var(--main-bg-color);
    display: inline-block;
    cursor: default;
    padding: 0 0.7em;
}
:host > button{
    color: var(--monthdate-color);
    background-color: transparent;
    border-color: transparent;
}
:host > button:hover{
    color: var(--main-font-color)
}
:host > button[action="-1"]{
    transform: rotate(180deg);
}
`)
export default sheet
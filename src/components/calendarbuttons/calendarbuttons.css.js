const sheet = new CSSStyleSheet();
sheet.replace(`
:host{
    padding: 0 0.7em;
    background-color: var(--main-bg-color);
    text-align: center;
}
:host > button{
    color: var(--monthdate-color);
    background-color: transparent;
    border-color: transparent;
    height: 100%;
}
:host > button:hover{
    color: var(--main-font-color)
}
:host > button[action="-1"]{
    transform: rotate(180deg);
}
`)
export default sheet
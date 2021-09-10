const sheet = new CSSStyleSheet();
sheet.replace(`
:host{
    padding-right: 0.3em;
    background-color: var(--main-bg-color);
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
:host > button[action="1"]{
}
:host > button[action="-1"]{
    transform: rotate(180deg);
}
`)
export default sheet
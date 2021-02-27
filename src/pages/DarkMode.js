const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bg: getStyle(body, "var(--background)"),
    colorText: getStyle(body, "var(--text)")
}

const darkMode = {
    bg: "#888",
    colorText: "#fff"
}

const changeColors = () => {

}

checkbox.addEventListener("change", ({target}) =>{
    target.checked ? changeColors() : changeColors()
})
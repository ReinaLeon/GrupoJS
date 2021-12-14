const elementDivs = document.getElementById ("divs")

const divs = () => {
    const element = document.createElement("div");

    element.onclick = () => {
        element.style.backgroundColor = "blue"
    }

    element.innerHTML = "<h1>HOLA SOY UN DIV</h1>"
    elementDivs.appendChild(element)
}
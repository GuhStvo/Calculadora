let menu = document.getElementById("menu")
let toggleMenu = document.getElementById("toggle-menu")
let formCalc = document.getElementById("form-calc")
let resultado = document.getElementById("resultado")

// Função do calculo

formCalc.addEventListener('submit', (event) =>{
    event.preventDefault()

    resultado.style = `background-color: #fff;
                        border: 1px solid #222;
                        border-radius: 5px;
                        padding: 7px;`
    
    if(formCalc.number1.value === "") {
        resultado.innerHTML = "Digite um número"
        formCalc.number1.style = `border: 2px solid red;`
        formCalc.number2.style = `border: 2px solid #ddd;`
        operacao.style = `border: 2px solid #ddd;`
    } else if (formCalc.number2.value === "") {
        resultado.innerHTML = "Digite outro número"
        formCalc.number1.style = `border: 2px solid #ddd;`
        formCalc.number2.style = `border: 2px solid red;`
        operacao.style = `border: 2px solid #ddd;`
    } else {
        if(operacao.value === "soma") {
            resultado.innerHTML = Number(formCalc.number1.value) + Number(formCalc.number2.value)
            operacao.style = `border: 2px solid #ddd;`
            formCalc.number1.style = `border: 2px solid #ddd;`
            formCalc.number2.style = `border: 2px solid #ddd;`
        } else if (operacao.value === "divisao") {
            resultado.innerHTML = Number(formCalc.number1.value) / Number(formCalc.number2.value)
            operacao.style = `border: 2px solid #ddd;`
            formCalc.number1.style = `border: 2px solid #ddd;`
            formCalc.number2.style = `border: 2px solid #ddd;`
        } else if (operacao.value === "subtracao") {
            resultado.innerHTML = Number(formCalc.number1.value) - Number(formCalc.number2.value)
            operacao.style = `border: 2px solid #ddd;`
            formCalc.number1.style = `border: 2px solid #ddd;`
            formCalc.number2.style = `border: 2px solid #ddd;`
        } else if (operacao.value === "multiplicacao") {
            resultado.innerHTML = Number(formCalc.number1.value) * Number(formCalc.number2.value)
            operacao.style = `border: 2px solid #ddd;`
            formCalc.number1.style = `border: 2px solid #ddd;`
            formCalc.number2.style = `border: 2px solid #ddd;`
        } else {
            resultado.innerHTML = "Selecione uma operação"
            formCalc.number1.style = `border: 2px solid #ddd;`
            formCalc.number2.style = `border: 2px solid #ddd;`
            operacao.style = `border: 2px solid red;`
        }

    }
})

// Função menu
toggleMenu.addEventListener('click', () => {
    menu.classList.toggle("hide")
})

// Função da calculadora (mostrar/ocultar)
function navMenu(link) {
    let item = document.getElementsByClassName(link)

    if(link === "calc" && item[0].style.display === "block")
        item[0].style.display = "none"
    else
        item[0].style.display = "block"
}
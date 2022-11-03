import { menuResponsivo } from "./menuResponsivo.js"
import { homePage, loginPage } from "./redirecionar.js"
import { criarUser } from "./request.js"

function cadastrarUser(){
    const formulario = document.querySelector(".form-cadastrar")

    formulario.addEventListener("submit", (event) =>{
        event.preventDefault()

        const inputs = [...event.target]
        const cadastro = {}

        inputs.forEach(({name, value}) =>{
            if(name){
                cadastro[name] = value
            }
        })
        criarUser(cadastro)
    })
}
cadastrarUser()
menuResponsivo()
loginPage()
homePage()
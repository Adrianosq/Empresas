import { menuResponsivo } from "./menuResponsivo.js";
import { cadastrarPage, cadastrarPageBottom, homePage } from "./redirecionar.js";
import { loginUser } from "./request.js";

function loginPage(){
    const formulario = document.querySelector(".form-login")

    formulario.addEventListener("submit", (event) =>{
        event.preventDefault()

        const inputs = [...event.target]
        const login = {}

        inputs.forEach(({name, value}) =>{
            if(name){
                login[name] = value
            }
        })
        loginUser(login)
    })
}

menuResponsivo()
loginPage()
homePage()
cadastrarPage()
cadastrarPageBottom()
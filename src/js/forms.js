import { listarAllDepartamentos, renderUserCadastrados } from "./render.js"
import { contratarFuncionario, criarDepartamentoRequest, deleteDepartamento, deleteUser, editDepartamento, userEditAdm } from "./request.js"

export function userDelete(id, name){
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")


    formulario.insertAdjacentHTML("beforeend", `
        <h3>Realmente deseja remover o usuário ${name}?</h3>
        <div class="div-btn">
            <button class="button-form delete">Deletar</button>
        </div>
    `)

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()
        await deleteUser(id)
        await renderUserCadastrados()
    })

    return formulario
}

export function userEdit(id){
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")


    formulario.insertAdjacentHTML("beforeend", `
        <h3>Editar Usuário</h3>
        <select name="kindofwork" placeholder="Selecionar modalidade de trabalho">
            <option>home office</option>
            <option>presencial</option>
            <option>híbrido</option>
        </select>
        <select name="professional_level" placeholder="Selecionar nível profissional">
            <option>estágio</option>
            <option>júnior</option>
            <option>pleno</option>
            <option>sênior</option>
        </select>
            <button class="button-form blue">Editar</button>
    `)

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

            const inputs = [...event.target]
            const edit = {}
    
            inputs.forEach(({name, value}) =>{
                if(name){
                    edit[name] = value
                }
            })
        
        await userEditAdm(id, edit)
        await renderUserCadastrados()
    })

    return formulario
}

export function createDepartamento(data){
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    const h3 = document.createElement('h3')
    const inputName = document.createElement('input')
    const inputDescription = document.createElement('input')
    const select = document.createElement('select')
    const btn = document.createElement('button')

    h3.innerText = 'Criar Departamento'

    inputName.name = 'name'
    inputName.placeholder = 'Nome do departamento'

    inputDescription.name = 'description'
    inputDescription.placeholder = 'Descrição...'

    btn.innerText = 'Criar o departamento'
    btn.type = 'submit'
    btn.classList = 'button-form blue'

    select.name = 'company_uuid'

    data.forEach(elem => {
        const card = cardSelectDepartamento(elem)
        select.append(card)
    })

    formulario.append(h3, inputName, inputDescription, select, btn)

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

            const inputs = [...event.target]
            const edit = {}
    
            inputs.forEach(({name, value}) =>{
                if(name){
                    edit[name] = value
                }
            })
        await criarDepartamentoRequest(edit)
        await listarAllDepartamentos()
    })

    return formulario
}

function cardSelectDepartamento({name, uuid}) {
    const option = document.createElement('option')

    option.innerText = name
    option.value = uuid

    return option
}

export function departamentoDelete(id, name){
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")


    formulario.insertAdjacentHTML("beforeend", `
        <h3>Realmente deseja remover o usuário ${name}?</h3>
        <div class="div-btn">
            <button class="button-form delete">Deletar</button>
        </div>
    `)

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()
        await deleteDepartamento(id)
        await listarAllDepartamentos()
    })

    return formulario
}

export function editarDepartamento(id, valor){
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")


    formulario.insertAdjacentHTML("beforeend", `
        <h3>Editar Departamento</h3>
        <input name='description' value='${valor}'></input>
            <button class="button-form blue">Salvar alterações</button>
    `)

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

            const inputs = [...event.target]
            const edit = {}
    
            inputs.forEach(({name, value}) =>{
                if(name){
                    edit[name] = value
                }
            })
        await editDepartamento(id, edit)
        await listarAllDepartamentos()
    })

    return formulario
}

export function visibilityDepartamento(data, name, description, companies, department_uuid){
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    const nameDepartamento = document.createElement('h3')
    const descriptionDepartamento = document.createElement('p')
    const companieDeparmento = document.createElement('p')
    const select = document.createElement('select')
    const btn = document.createElement('button')
    const divDepartamento = document.createElement('div')
    const divSelect = document.createElement('div')

    nameDepartamento.innerText = name

    descriptionDepartamento.innerText = description

    companieDeparmento.innerText = companies.name

    btn.innerText = 'Contratar'
    btn.type = 'submit'
    btn.classList = 'button-form contratar'

    select.name = 'user_uuid'

    divDepartamento.append(descriptionDepartamento, companieDeparmento)

    divSelect.append(select, btn)

    data.forEach(elem => {
        const card = cardSelectUser(elem)
        select.append(card)
    })

    formulario.append(nameDepartamento, divDepartamento, divSelect)

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

            const inputs = [...event.target]
            const edit = {}
    
            inputs.forEach(({name, value}) =>{
                if(name){
                    edit[name] = value
                }
            })

            console.log()
        await contratarFuncionario({...edit, department_uuid})
        // await listarAllDepartamentos()
      
    })

    return formulario
}

function cardSelectUser({username, uuid}) {
    const option = document.createElement('option')

    option.innerText = username
    option.value = uuid

    return option
}

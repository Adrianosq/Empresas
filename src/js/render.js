import { departamentoDelete, editarDepartamento, userDelete, userEdit, userLogadoEdit, visibilityDepartamento } from "./forms.js"
import { openModal } from "./modal.js"
import { getAllDepartamentos, getAllEmpresas, getAllUsers, userLogado, userSemDepartamento } from "./request.js"

export async function renderUserCadastrados() {
    const card = document.querySelector('.user-cadastrados-card')

    card.innerHTML = ""

    const data = await getAllUsers()

    data.forEach(elem => {
        const cardUser = createCardUser(elem)
        card.append(cardUser)
    })
}

function createCardUser({username, department_uuid, professional_level, uuid}) {
    const cardLi = document.createElement('li')
    const cardUsername = document.createElement('h2')
    const cardDepartment = document.createElement('p')
    const cardProf = document.createElement('p')
    const cardDivButton = document.createElement('div')
    const cardEdit = document.createElement('img')
    const cardDelete = document.createElement('img')

    cardUsername.innerText = username

    cardDepartment.innerText = department_uuid

    cardProf.innerText = professional_level

    cardEdit.src = "/src/assets/img/edit.png"
    cardEdit.classList.add('card-btn')
    cardEdit.addEventListener('click', () => {
        const form = userEdit(uuid)
        openModal(form)
    })

    cardDelete.src = "/src/assets/img/delete.png"
    cardDelete.classList.add('card-btn')
    cardDelete.addEventListener('click', () => {
        const form = userDelete(uuid, username)
        openModal(form)
    })

    cardDivButton.append(cardEdit, cardDelete)

    cardLi.classList.add('card-list')
    cardLi.append(cardUsername, cardDepartment, cardProf, cardDivButton)
    
    return cardLi
}

export async function listarAllEmpresas() {

    const data = await getAllEmpresas()
    
    const select = document.querySelector('.select-empresas')

    data.forEach((elem) => {
        const option = renderAllEmpresas(elem)

        select.append(option)

    })
}

function renderAllEmpresas(data) {
    const option = document.createElement('option')

    option.innerText = data.name
    option.addEventListener('click', (event) => {
        
    })

    return option
}

export async function listarAllDepartamentos() {
    const data = await getAllDepartamentos()

    const departamento = document.querySelector('.departamento-card')

    departamento.innerHTML = ''

    data.forEach(elem => {
        const card = renderAllDepartamentos(elem)
        departamento.append(card)
    })
}

function renderAllDepartamentos({companies, name, description, uuid}) {
    const cardLi = document.createElement('li')
    const cardUsername = document.createElement('h2')
    const cardDepartment = document.createElement('p')
    const cardComapanyName = document.createElement('p')
    const cardDivButton = document.createElement('div')
    const cardVisibility = document.createElement('img')
    const cardEdit = document.createElement('img')
    const cardDelete = document.createElement('img')

    cardUsername.innerText = name    

    cardDepartment.innerText = description

    cardComapanyName.innerText = companies.name

    cardVisibility.src = "/src/assets/img/visibility.png"
    cardVisibility.classList.add('card-btn')
    cardVisibility.addEventListener('click', async () => {
        const data = await userSemDepartamento()
        const form = visibilityDepartamento(data, name, description, companies, uuid)
        openModal(form)
    })

    cardEdit.src = "/src/assets/img/edit-black.png"
    cardEdit.classList.add('card-btn')
    cardEdit.addEventListener('click', () => {
        const form = editarDepartamento(uuid, description)
        openModal(form)
    })

    cardDelete.src = "/src/assets/img/delete.png"
    cardDelete.classList.add('card-btn')
    cardDelete.addEventListener('click', () => {
        const form = departamentoDelete(uuid, name)
        openModal(form)
    })

    cardDivButton.append(cardVisibility, cardEdit, cardDelete)

    cardLi.classList.add('card-list')
    cardLi.append(cardUsername, cardDepartment, cardComapanyName, cardDivButton)
    
    return cardLi
}

export async function renderUserLogado() {
    const {username, email, professional_level, kind_of_work} = await userLogado()
    
    const user = document.querySelector('.user-logado')
    const userName = document.createElement('h2')
    const userEmail = document.createElement('p')
    const userLevel = document.createElement('p')
    const userWork = document.createElement('p')
    const divUsername = document.createElement('div')
    const divInfo = document.createElement('div')
    const edit = document.createElement('img')

    userName.innerText = username

    divUsername.append(userName)
    divUsername.classList.add('div-user')

    userEmail.innerText = email

    userLevel.innerText = professional_level

    userWork.innerText = kind_of_work

    edit.src = "/src/assets/img/edit.png"
    edit.classList.add('btn-edit')
    edit.addEventListener('click', () => {
        const form = userLogadoEdit(username, email)
        openModal(form)
    })

    divInfo.append(userEmail, userLevel, userWork, edit)
    divInfo.classList.add('div-info')

    user.append(divUsername, divInfo)
}


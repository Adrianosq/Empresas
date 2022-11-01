export function loginPage(){
    const btn = document.querySelector('.login')

    btn.addEventListener('click', () => {
        window.location.replace('/src/pages/loginPage.html')
    })
}

export function cadastrarPage() {
    const btn = document.querySelector('.cadastrar')
    btn.addEventListener('click', () => {
        window.location.replace('/src/pages/cadastrarPage.html')
    })
}

export function homePage(){
    const btn = document.querySelector('.home')

    btn.addEventListener('click', () => {
        window.location.replace('/index.html')
    })
}

export function cadastrarPageBottom(){
    const btnWhite = document.querySelector('.white')
    btnWhite.addEventListener('click', () => {
        window.location.replace('/src/pages/cadastrarPage.html')
    })
}

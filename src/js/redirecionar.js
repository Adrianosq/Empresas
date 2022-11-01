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
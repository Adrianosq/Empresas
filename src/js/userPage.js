import { renderUserLogado } from "./render.js";
import { toast } from "./toasts.js";

function logout() {
    const btn = document.querySelector('.logout')

    btn.addEventListener('click', () => {
        localStorage.removeItem('@token')
        toast('Sucesso!', 'Logout realizado com sucesso')
        setTimeout(() => {
            window.location.replace('../../index.html')
        }, 4000);
    })
}

logout()
renderUserLogado()
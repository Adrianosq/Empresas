import { createDepartamento } from "./forms.js";
import { openModal } from "./modal.js";
import { listarAllDepartamentos, listarAllEmpresas, renderUserCadastrados } from "./render.js";
import { getAllEmpresas } from "./request.js";
import { toast } from "./toasts.js";

async function criarDepartamento(){
    const btn = document.querySelector('.blue')

    btn.addEventListener('click', async () => {
        const data = await getAllEmpresas()
        const form = createDepartamento(data)
        openModal(form)
    })
}

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
renderUserCadastrados()
criarDepartamento()
listarAllEmpresas()
listarAllDepartamentos()
logout()


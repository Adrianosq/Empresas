import { toast } from "./toasts.js"

const baseUrl = "http://localhost:6278"
const token = JSON.parse(localStorage.getItem("@token"))


export async function loginUser(data){
    try{
        const request = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        const login = await request.json()

        if(request.ok){
            authLogin(login)
        } else{
            toast('Error', login.error)
        }
    }catch(err) {
        console.log(err)
    }
}

async function authLogin(data) {
    try{
        const request = await fetch(`${baseUrl}/auth/validate_user`, {
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`
            }
        })

        const auth = await request.json()

        if(auth.is_admin){
            toast('Sucesso!', 'Login como administrador realizado com sucesso!')
            localStorage.setItem('@token', JSON.stringify(data.token))
            
            setTimeout(() => {
                window.location.replace('/src/pages/admPage.html')
            }, 4000);
        }else{
            toast('Sucesso!', 'Login como usuário realizado com sucesso!')
            localStorage.setItem('@token', JSON.stringify(data.token))

            setTimeout(() => {
                window.location.replace('/src/pages/userPage.html')
            }, 4000);
        }
    }catch(err) {
        console.log(err)
    }
}

export async function criarUser(data) {
    try{
        const request = await fetch(`${baseUrl}/auth/register`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        const cadastro = await request.json()

        if(request.ok){
            toast("Sucesso!", "Cadastro realizado com sucesso!")
            
            setTimeout(() => {
                window.location.replace('/src/pages/loginPage.html')
            }, 4000);
        } else{
            toast('Error', cadastro.error)
        }
    } catch(err){
        console.log(err)
    }
}

export async function getAllUsers() {
    try{
        const request = await fetch(`${baseUrl}/users`, {
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        return request.json()
    } catch(err) {
        console.log(err)
    }
}

export async function deleteUser(id) {
    try{
        const request = await fetch(`${baseUrl}/admin/delete_user/${id}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        if(request.ok){
            toast('Sucesso!', 'Usuário deletado com sucesso!')
        }
    }catch(err) {
        console.log(err)
    }
}

export async function userEditAdm(id, data){
    try{
        const request = await fetch(`${baseUrl}/admin/update_user/${id}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if(request.ok) {
            toast('Sucesso!', 'Informações atualizadas com sucesso!')
        }
    }catch(err){
        console.log(err)
    }
}

export async function getAllEmpresas() {
    try{
        const request = await fetch(`${baseUrl}/companies`, {
            method: 'GET', 
            headers: {
                "Content-Type": "application/json",
            }
        })

        const empresas = await request.json()

        return empresas

    }catch(err) {
        console.log(err)
    }
}

export async function getAllDepartamentos() {
    try{
        const request = await fetch(`${baseUrl}/departments`, {
            method: 'GET', 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        
        const departamentos = await request.json()

        return departamentos
    }catch(err) {
        console.log(err)
    }
}

export async function criarDepartamentoRequest(data) {
    try{
        const request = await fetch(`${baseUrl}/departments`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        console.log(request)
        if(request.ok){
            console.log('oi')
            toast('Sucesso!', 'Departamento criado com sucesso!')
        }
    }catch(err){
        console.log(err)
    }
}

export async function deleteDepartamento(id) {
    try{
        const request = await fetch(`${baseUrl}/departments/${id}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        if(request.ok){
            toast('Sucesso!', 'Departamento deletado com sucesso!')
        }
    } catch(err){
        console.log(err)
    }
}

export async function editDepartamento(id, data) {
    try{
        const request = await fetch(`${baseUrl}/departments/${id}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if(request.ok) {
            toast('Sucesso!', 'Informações atualizadas com sucesso!')
        }
    }catch(err){
        console.log(err)
    }
}

export async function userSemDepartamento() {
    try{
        const request = await fetch(`${baseUrl}/admin/out_of_work`, {
            method: 'GET', 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        
        const departamentos = await request.json()

        return departamentos
    }catch(err) {
        console.log(err)
    }
}

export async function contratarFuncionario(data){
    try{
        const request = await fetch(`${baseUrl}/departments/hire/`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if(request.ok){
            toast('Sucesso!', 'Usuário contratado com sucesso')
        }
    }catch(err){
        console.log(err)
    }
}

export async function userLogado(){
    try{
        const request = await fetch(`${baseUrl}/users/profile`, {
            method: 'GET', 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        })
        return request.json()
    }catch(err){
        console.log(err)
    }
}

export async function editUserLogado(data) {
    try{
        const request = await fetch(`${baseUrl}/users`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if(request.ok){
            toast('Sucesso!', 'Informações atualizadas com sucesso!')
        }
    }catch(err){
        console.log(err)
    }
}







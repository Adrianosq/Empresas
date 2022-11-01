import { toast } from "./toasts.js"

const baseUrl = "http://localhost:6278"

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
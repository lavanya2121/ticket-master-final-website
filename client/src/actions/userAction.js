import axios from '../config/axios'
import Swal from 'sweetalert2'
import swal from 'sweetalert'

export const startRegister=(formData,redirect)=>{
    return ()=>{
        axios.post('/users/register',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                // //alert(response.data.message)
                // swal(`${response.data.message}`, "","error")
                const displayMessages = []
                    for(const key in response.data.errors) {
                        displayMessages.push(response.data.errors[key].message)
                    }
                    Swal.fire({
                        title: 'Error!',
                        text: `${displayMessages.join(', ')}`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
            }else{
                //swal("Successfully Registered","","success")
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully registered',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                console.log('register response from the server',response.data)
                redirect()
            }
        })
    }

}


//synchrounous
export const setUser=(user)=>{
    return {type:'SET_USER',payload:user}
}

export const startSetUser=()=>{
    return (dispatch)=>{
        axios.get('/users/account',{//sending token info to the server //for get n delete headers is the 2nd parameter n for post n put it is the 3rd parameter(2nd parameter would be ur form data) 
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            //console.log(response.data)
            const user=response.data
            dispatch(setUser(user))//setUser->synchrounous
            // Swal.fire({
            //     title: 'Success!',
            //     text: 'You have successfully loggedin to the Account/Profile page of Ticket Master App',
            //     icon: 'success',
            //     confirmButtonText: 'Ok'
            // })
        })

    }
    
}

//asynchrounous
export const startLogin = (formData,redirect) => {
    return (dispatch) => {
        axios.post('/users/login',formData)
        .then(response => {
            if(response.data.hasOwnProperty('error')){
                //swal(`${response.data.error}`,"","error")
                    const displayMessages = []
                    for(const key in response.data.error) {
                        displayMessages.push(response.data.error[key].error)
                    }
                    Swal.fire({
                        title: 'Error!',
                        text: `${displayMessages.join(', ')}`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
            } else {
                console.log("account",response.data.token)
                if(response.data.token) {
                    localStorage.setItem('authToken',response.data.token)
                axios.get('/users/account',{
                    headers : {
                        'x-auth' : localStorage.getItem('authToken')
                    }
                })
                .then((response) => {
                    const user = response.data
                    console.log("login response from the server",user)
                    dispatch(setUser(user))
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have successfully loggedin',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    redirect()
                })
                } else {
                    //swal('invalid email/password ',"","error")
                    Swal.fire({
                        title: 'Error!->Invalid Email/Password',
                        text: `${response.data.error}`,
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        timer: 2000
                    })
                }
                
            }
        })
    }

}

//logout
export const removeUser=()=>{
    return {
        type:'REMOVE_USER'
    }
}

export const startLogout=()=>{
    return (dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log("logout response from the server",response.data)
            if(response.data.notice){
                console.log("authremove/userremove")
                localStorage.removeItem('authToken')
                dispatch(removeUser())
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully logged out of the application',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                window.location.href="/users/login"
            }
        })
    }
}
 
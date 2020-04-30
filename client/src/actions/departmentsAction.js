import axios from '../config/axios'
import Swal from 'sweetalert2'

//synchrounous ->store
export const getDepartments=(departments)=>{
    return {
        type:'GET_DEPARTMENTS',
        payload:departments
    }
}


//asynchronous->get the data
export const startGetDepartments=()=>{
    return(dispatch)=>{
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then((response)=>{
                console.log('departments list response from the server',response.data)
                const department=response.data
                dispatch(getDepartments(department))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
//-----------------------------------------------------------------------------------

//synchronous
export const addDepartment=(department)=>{
    return{
        type:'ADD_DEPARTMENT',
        payload:department
    }
}

//asynchronous
export const startAddDepartment=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/departments',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log('Add department response from the server',response.data)
            // const department=response.data
            // dispatch(addDepartment(department))
            dispatch(startGetDepartments())
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully added a Department',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            redirect()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
//-----------------------------------------------------------------------------
//remove
export const removeDepartment=(id)=>{
    return {
        type:'REMOVE_DEPARTMENT',
        payload:id
    }
}

export const startRemoveDepartment=(id)=>{
return(dispatch)=>{
    axios.delete(`/departments/${id}`,{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        console.log("remove customer response from the server",response.data)
        const department=response.data
        dispatch(removeDepartment(department._id))
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully removed/deleted the Department',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
       
    })
    .catch((err)=>{
        console.log(err)
    })
  }
}

//-----------------------------------------------------------------------
//update
export const updateDepartment=(department)=>{
    return {
        type:'UPDATE_DEPARTMENT',
        payload:department
    }
}

export const startUpdateDepartment=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/departments/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log("update department response from the server",response.data)
            const department=response.data
            dispatch(updateDepartment(department))
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully updated the Department',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            redirect()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

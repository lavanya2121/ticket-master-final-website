import axios from '../config/axios'
import Swal from 'sweetalert2'

//synchronous
export const getEmployees=(employees)=>{
    return{
        type:'GET_EMPLOYEES',
        payload:employees
    }

}

//asynchronous
export const startGetEmployees=()=>{
    return(dispatch)=>{
        axios.get('/employees',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then((response)=>{
                console.log('employees list response from the server',response.data)
                const employees=response.data
                dispatch(getEmployees(employees))

            })
    }
}
// ------------------------------------------------------------------
//synchronous
export const addEmployee=(employee)=>{
    return{
        type:'ADD_EMPLOYEE',
        payload:employee
    }
}

//asynchronous
export const startAddEmployee=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/employees',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log('Add employee response from the server',response.data)
            const employee=response.data
            dispatch(addEmployee(employee))
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully added an Employee',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            redirect()
        })
    }

}
//--------------------------------------------------------------------
//remove
export const removeEmployee=(id)=>{
    return {
        type:'REMOVE_EMPLOYEE',
        payload:id
    }
}

export const StartRemoveEmployee=(id)=>{
return(dispatch)=>{
    axios.delete(`/employees/${id}`,{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        console.log("remove employee response from the server",response.data)
        const employee=response.data
        dispatch(removeEmployee(employee._id))
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully removed/deleted an Employee',
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
export const updateEmployee=(employee)=>{
    return {
        type:'UPDATE_EMPLOYEE',
        payload:employee
    }
}

export const startUpdateEmployee=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/employees/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log("update employee response from the server",response.data)
            const employee=response.data
            dispatch(updateEmployee(employee))
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully updated an Employee',
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

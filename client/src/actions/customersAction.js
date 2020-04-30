import axios from '../config/axios'
import Swal from 'sweetalert2'

//synchrounous ->store
export const getCustomers=(customers)=>{
    return {
        type:'GET_CUSTOMERS',
        payload:customers
    }
}

//asynchronous->get the data
export const startGetCustomers=()=>{
    return(dispatch)=>{
        axios.get('/customers',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then((response)=>{
                console.log('customers list response from the server',response.data)
                const customers=response.data
                dispatch(getCustomers(customers))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
//-----------------------------------------------------------------------------------

//synchronous
export const addCustomer=(customer)=>{
    return{
        type:'ADD_CUSTOMER',
        payload:customer
    }
}


//asynchronous
export const startAddCustomer=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/customers',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log('Add customer response from the server',response.data)
            // const customer=response.data
            // dispatch(addCustomer(customer))
            dispatch(startGetCustomers())
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully added a Customer',
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
export const removeCustomer=(id)=>{
    return {
        type:'REMOVE_CUSTOMER',
        payload:id
    }
}

export const startRemoveCustomer=(id)=>{
return(dispatch)=>{
    axios.delete(`/customers/${id}`,{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        console.log("remove customer response from the server",response.data)
        const customer=response.data
        dispatch(removeCustomer(customer._id))
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully removed/deleted the Customer',
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
export const updateCustomer=(customer)=>{
    return {
        type:'UPDATE_CUSTOMER',
        payload:customer
    }
}

export const startUpdateCustomer=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/customers/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log("update customer response from the server",response.data)
            const customer=response.data
            dispatch(updateCustomer(customer))
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully updated the Customer',
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

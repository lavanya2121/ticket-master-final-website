
import axios from '../config/axios'
import Swal from 'sweetalert2'

export const getTickets=(ticket)=>{
    return {
        type:'GET_TICKET',
        payload:ticket
    }
}

export const startGetTickets = () => {
    return(dispatch)=>{
        axios.get('/tickets',{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log('Tickets list response from the server',response.data)
            const tickets=response.data
            dispatch(getTickets(tickets))
        })
    }
}
//----------------------------------------------------------------------------------
export const updateStatus = (ticket) => {
    return {
        type:'UPDATE_STATUS',
        payload:ticket
    }
}

export const startUpdateStatus = (obj) => {
    return(dispatch)=>{
        axios.put(`/tickets/${obj.id}`,obj.status,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            dispatch(updateStatus(response.data))
        })
    }
}
//-----------------------------------------------------------------------------------------------
export const addTicket = (ticket) => {
    return {
        type:'ADD_TICKET',
        payload:ticket
    }
}

export const startAddTicket = (obj) => {
    return(dispatch)=>{
        axios.post('/tickets',obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.errors){
                Swal.fire(
                    'Error',
                     response.data.message,
                    'error'
                )
            }
            else{
                Swal.fire(
                    'Added',
                    'Ticket successfully added',
                    'success'
                )
                dispatch(addTicket(response.data))
                obj.redirect()
                dispatch(startGetTickets())
            }
        })
    }
    
}
//-------------------------------------------------------------------------------------------
export const removeTicket = (ticket) => {
    return {
        type : 'REMOVE_TICKET' , 
        payload : ticket
    }

}

export const startRemoveTicket = (id) =>{
    return(dispatch)=>{
        axios.delete(`/tickets/${id}`,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            Swal.fire(
                'Deleted',
                'Ticket successfully deleted',
                'success'
            )
            dispatch(removeTicket(response.data))
        })
    }
}
//-----------------------------------------------------------------------------------------
export const updateTicket=(ticket)=>{
    return {
        type:'UPDATE_TICKET',
        payload:ticket
    }
}

export const startUpdateTicket = (obj) => {
    return(dispatch)=>{
        axios.put(`/tickets/${obj.id}`,obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.errors){
                alert(response.data.message)
            }
            else{
                Swal.fire(
                    'Updated',
                    'Ticket successfully updated',
                    'success'
                )
                dispatch(updateTicket(response.data))
                obj.redirect()
               
            }
        })
    }
}
//---------------------------------------------------------------------------------
export const startRemoveTicketSearch = (obj) =>{
    return(dispatch)=>{
        axios.delete(`/tickets/${obj.id}`,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            Swal.fire(
                'Deleted',
                'Ticket successfully deleted',
                'success'
            )
            dispatch(removeTicket(response.data))
            
        })
    }
}

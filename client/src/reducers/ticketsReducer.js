
const ticketsIntialState = []

const ticketReducer = (state=ticketsIntialState,action) => {
    switch(action.type){
        case 'GET_TICKET' : {
            return [...action.payload]
        }

        case 'UPDATE_STATUS' : {
            return state.map(ticket=>{
                if(ticket._id == action.payload._id){
                    return action.payload
                }
                else {
                    return ticket
                }
            })
        }

        case 'ADD_TICKET' : {
            return state.map(ticket=>{
                if(ticket._id == action.payload._id){
                    return action.payload
                }
                else{
                    return ticket
                }
            })
        }

        case 'REMOVE_TICKET' : {
            return state.filter(ticket=>ticket._id != action.payload._id)
        }
        
        case 'UPDATE_TICKET' : {
            return state.map(ticket=>{
                if(ticket._id == action.payload._id){
                    return [action.payload]
                }
                else{
                    return [ticket]
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default ticketReducer 

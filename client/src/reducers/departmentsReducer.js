const departmentsInitialState=[]

const departmentsReducer=(state=departmentsInitialState,action)=>{
    switch(action.type){
        case 'GET_DEPARTMENTS':{
            return [...action.payload]
        }

        case 'ADD_DEPARTMENT':{
            return [...state,action.payload]
        }

        case 'REMOVE_DEPARTMENT':{
            return state.filter(department=>department._id != action.payload)
        }

        case 'UPDATE_DEPARTMENT':{
            return state.map(department=>{
                if(department._id==action.payload._id){
                    return action.payload
                }else{
                    return department
                }
            })
        }
       
        default:{
            return [...state]
        }
    }
}
export default departmentsReducer
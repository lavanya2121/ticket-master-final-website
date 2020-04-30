
export const ticketFind=(ticket,id)=>{
    return ticket.find(tick=>tick._id==id)
 }

 export const customerFilter=(ticket,id)=>{
    return ticket.filter(tick=>tick.customer==id)
 }

 export const departmentFilter=(ticket,id)=>{
   return ticket.filter(tick=>tick.department==id)
}

export const employeeFilter = (ticket,id) =>{
   return ticket.filter(ticket=>{
      return ticket.employees.find(tick=>tick._id == id)
   })
}

export const ticketFindCode=(ticket,code)=>{
   return ticket.find(tick=>tick.code==code)
}


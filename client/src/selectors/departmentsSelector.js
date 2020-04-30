//we are finding the department based on id
export const findDepartment=(departments,id)=>{
    return (departments.find(department=>department._id==id))
}
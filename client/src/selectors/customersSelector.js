//we are finding the customer based on id
export const findCustomer=(customers,id)=>{
    return (customers.find(customer=>customer._id==id))
}
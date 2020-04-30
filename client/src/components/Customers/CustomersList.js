import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startGetCustomers,startRemoveCustomer } from '../../actions/customersAction';
import Swal from 'sweetalert2'
import { MDBDataTable,MDBBtn, MDBContainer,MDBRow,MDBCol} from 'mdbreact'

//material -ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Typography} from '@material-ui/core'

function CustomersList(props){
    
    //handleRemove event handler
    const handleRemove=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              ) 
            props.dispatch(startRemoveCustomer(id))
            
            }
        })
    }

    if(props.customers.length==0){
        props.dispatch(startGetCustomers())
    }
    const data = {
        columns: [
            {
                label: 'ID',
                field: 'id',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Mobile',
                field: 'mobile',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Show',
                field: 'show',
                width: 150
            },
            {
                label: 'Remove',
                field: 'remove',
                width: 150
              },
        ],
        rows: props.customers.map(customer => ({
            id:customer._id,
            name: <Link to={`/customers/${customer._id}`}>{customer.name}</Link>, 
            email: customer.email,
            mobile: customer.mobile,
            show:<Link to={`/customers/${customer._id}`} 
                                className="btn btn-primary  btn-sm" color="primary">
                               <PersonAddIcon titleAccess="Show Customer" style={{marginTop : "3px",paddingRight:"5px"}}/>
                                    Show
                          </Link>,
            remove: <MDBBtn size="sm" className="btn btn-danger btn-sm" color="danger"
                                onClick={() => {
                                handleRemove(customer._id)
                }}> <DeleteIcon titleAccess="Delete Customer" style={{marginTop : "3px",paddingRight:"5px"}}/>
                Remove </MDBBtn>
        }))
    }

    return (
        <div>
            <Typography variant="h4" 
                        component="h4" 
                        style={{textAlign : "center",margin:"20px"}}>
                       <Link to='/customers' style={{color:"blue"}}>LISTING CUSTOMERS-{props.customers.length}</Link>
                </Typography>
        <Card style={{width : "1200px",margin : "0 auto",border : "1px"}}>
            <CardContent>
        <MDBContainer>
                <MDBRow>

                <MDBCol md="12">
                <MDBDataTable
                    striped
                    hover
                    data={data}
                    />
                </MDBCol>

            </MDBRow>
               
                <Link to="/customers/new" className="btn btn-primary">
                <PersonAddIcon titleAccess="Add Customer" style={{marginTop : "3px",paddingRight:"5px"}}/>
                ADD CUSTOMER</Link>
        </MDBContainer>
            </CardContent>
        </Card>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        customers : state.customers
    }
}
export default connect(mapStateToProps)(CustomersList)



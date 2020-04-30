import React from 'react'	
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startGetEmployees,StartRemoveEmployee } from '../../actions/employeesAction';
import Swal from 'sweetalert2'

//material -ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import {Typography} from '@material-ui/core'
import { MDBDataTable,MDBBtn, MDBContainer,MDBRow,MDBCol} from 'mdbreact'

function EmployeesList(props){

    const handleRemove = (id) => {
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
              props.dispatch(StartRemoveEmployee(id))
            }
            
          })
    }

    //only when the employees length is 0
    if(props.employees.length==0){
       props.dispatch(startGetEmployees())
    }

  // data table
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
            label: 'Department',
            field: 'department',
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
    rows: 
        props.employees.map(employee => ({
            id:employee._id,
            name: <Link to={`/departments/${employee._id}`}>{employee.name}</Link>,
            email:employee.email,
            mobile:employee.mobile,
            department:employee.department.name,
            show:<Link to={`/employees/${employee._id}`} 
                                className="btn btn-primary  btn-sm" color="primary">
                               <PersonAddIcon titleAccess="Show Employee" 
                                         style={{marginTop : "3px",paddingRight:"5px"}}/>
                                    Show
                          </Link>,
            remove: <MDBBtn size="sm" className="btn btn-danger btn-sm" color="danger"
                                onClick={() => {
                                handleRemove(employee._id)
                }}> <DeleteIcon titleAccess="Delete Employee" 
                                style={{marginTop : "3px",paddingRight:"2px"}}/>
                Remove </MDBBtn>
           
        }))
  
    
  };
    return (
        <div>
            <Typography variant="h4" 
                        component="h4" 
                        style={{textAlign : "center",margin:"20px"}}>
                       <Link to='/employees' style={{color:"blue"}}>
                       LISTING EMPLOYEES-{props.employees.length}</Link>
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
               
                <Link to="/employees/new" className="btn btn-primary">
                <PersonAddIcon titleAccess="Add an Employee" 
                          style={{marginTop : "2px",paddingRight:"2px"}}/>
                ADD AN EMPLOYEE
                </Link>

        </MDBContainer>
            </CardContent>
        </Card>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        employees:state.employees
    }
}

export default connect(mapStateToProps)(EmployeesList)

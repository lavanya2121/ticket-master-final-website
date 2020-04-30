import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startGetDepartments,startRemoveDepartment } from '../../actions/departmentsAction';
import Swal from 'sweetalert2'
import { MDBDataTable,MDBBtn, MDBContainer,MDBRow,MDBCol} from 'mdbreact'

//material -ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HomeIcon from '@material-ui/icons/Home';
import DeleteIcon from '@material-ui/icons/Delete';
import {Typography} from '@material-ui/core'

function DepartmentsList(props){

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
            props.dispatch(startRemoveDepartment(id))
            
            }
        })
    }

    //only when the departments length is 0
    if(props.departments.length==0){
        props.dispatch(startGetDepartments())
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
        props.departments.map(department => ({
            id:department._id,
            name: <Link to={`/departments/${department._id}`}>{department.name}</Link>, 
            show:<Link to={`/departments/${department._id}`} 
                                className="btn btn-primary  btn-sm" color="primary">
                               <HomeIcon titleAccess="Show Department" 
                                         style={{marginTop : "3px",paddingRight:"5px"}}/>
                                    Show
                          </Link>,
            remove: <MDBBtn size="sm" className="btn btn-danger btn-sm" color="danger"
                                onClick={() => {
                                handleRemove(department._id)
                }}> <DeleteIcon titleAccess="Delete Department" 
                                style={{marginTop : "3px",paddingRight:"2px"}}/>
                Remove </MDBBtn>
           
        }))
  
    
  };
    return (
        <div>
            <Typography variant="h4" 
                        component="h4" 
                        style={{textAlign : "center",margin:"20px"}}>
                       <Link to='/departments' style={{color:"blue"}}>
                       LISTING DEPARTMENTS-{props.departments.length}</Link>
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
               
                <Link to="/departments/new" className="btn btn-primary">
                <HomeIcon titleAccess="Add Department" 
                          style={{marginTop : "2px",paddingRight:"2px"}}/>
                ADD DEPARTMENT
                </Link>

        </MDBContainer>
            </CardContent>
        </Card>
        </div>
    )
}
    
const mapStateToProps=(state)=>{
    return{
        departments : state.departments
    }
}
export default connect(mapStateToProps)(DepartmentsList)



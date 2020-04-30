import React from 'react'
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {findEmployee} from '../../selectors/employeesSelector'

//material-ui
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import {Typography} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';

function EmployeeShow(props){
    const {_id,name,mobile,email}=props.employee || {} 
    return(
        <div>
            <Card style={{width : "600px",margin : "0 auto"}}>
               <CardContent>
            {
                props.employee?(
                <div>  
                    <Typography variant="h4" 
                             component="h4" 
                             style={{textAlign : "center",color:"blue"}}>
                             EMPLOYEE SHOW PAGE:
                    </Typography>
                <hr/>
                 
                 <Typography variant="h6" 
                             component="h6" 
                             style={{textAlign : "center"}}>
                    Employee ID-{_id}
                </Typography>
                <hr/>

                   <Typography variant="h6" 
                               component="h6" 
                               style={{textAlign : "center"}}>

                        Employee Name-{name} <br/><hr/>
                        Employee Email-{email} <br/><hr/>
                        Employee Mobile-{mobile}
                   </Typography>
                
                <hr/>
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "left",color:"blue"}}>
                  <Link to={`/employees/edit/${_id}`}  className="btn btn-primary">
                  <EditIcon titleAccess="Edit Employee" style={{marginTop : "3px",paddingRight:"5px"}}/>
                  EDIT EMPLOYEE
                  </Link><br/>
                </Typography>
                <br/>
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "left"}}>
                       <Link to='/employees' style={{color:"blue"}}>BACK</Link>
                </Typography>      
                 
                    </div>
                    ):(
                        <div>loading...</div>
                    )
            }
            </CardContent>
            </Card>
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return {
        employee:findEmployee(state.employees,id)
       }
}

export default connect(mapStateToProps)(EmployeeShow)




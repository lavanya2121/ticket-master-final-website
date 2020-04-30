
import React from 'react'
import {connect } from 'react-redux'
import {startAddEmployee} from '../../actions/employeesAction'
import EmployeesForm from './EmployeesForm'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function EmployeeNew(props){

    //handleSubmit event handler
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/employees')
        props.dispatch(startAddEmployee(formData,redirect))

    }
    return(
        <div>
            <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
              <CardContent>
                {/* Add Employee Label */}
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "center",color:"blue"}}>
                     ADD EMPLOYEE
                </Typography>

            {/*EmployeeForm Component  */}
           <EmployeesForm handleSubmit={handleSubmit}/>
            </CardContent>
          </Card>
        </div>
    )
}
export default connect()(EmployeeNew)

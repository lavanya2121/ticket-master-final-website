import React from 'react'
import   EmployeesForm from './EmployeesForm'
import {connect} from 'react-redux'
import { startUpdateEmployee } from '../../actions/employeesAction';

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function EmployeeEdit(props){
    //handleSubmit event handler
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        const redirect=()=>props.history.push('/employees')
        props.dispatch(startUpdateEmployee(formData,id,redirect))

    }
    return(
        <div>
            <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
             <CardContent>
                 {/* Employee Edit Label */}
                <Typography variant="h4" 
                            component="h4" 
                            style={{textAlign : "center",color:"blue"}}>
                     EDIT EMPLOYEE
                </Typography>

            {/*EmployeeForm Component  */}
            <EmployeesForm handleSubmit={handleSubmit}/>
       </CardContent>
       </Card>
        </div>
    )
}
export default connect()(EmployeeEdit)

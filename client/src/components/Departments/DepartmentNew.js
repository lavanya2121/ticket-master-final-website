import React from 'react'
import {connect } from 'react-redux'
import {startAddDepartment} from '../../actions/departmentsAction'
import DepartmentsForm from './DepartmentForm'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function DepartmentNew(props){
   
    //handleSubmit event handler
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/departments')
        props.dispatch(startAddDepartment(formData,redirect))

    }
    return(
        <div>
            <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
            <CardContent>
                
                {/* Add Department Label */}
                <Typography variant="h4" 
                            component="h4" 
                            style={{textAlign : "center",color:"blue"}}>
                     ADD DEPARTMENT
                </Typography>

            {/*CustomerForm Component  */}
           <DepartmentsForm handleSubmit={handleSubmit}/>
            </CardContent>
          </Card>
        </div>
    )
}
export default connect()(DepartmentNew)

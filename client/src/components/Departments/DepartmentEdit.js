import React from 'react'
import {connect} from 'react-redux'
import {startUpdateDepartment} from '../../actions/departmentsAction'
import DepartmentsForm from './DepartmentForm'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function DepartmentEdit(props){
    
    //handleSubmit event handler
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        const redirect=()=>props.history.push('/departments')
        props.dispatch(startUpdateDepartment(formData,id,redirect))

    }
    return(
        <div>
              <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
             <CardContent>
                 {/* Department Edit Label */}
                <Typography variant="h4" 
                            component="h4" 
                            style={{textAlign : "center",color:"blue"}}>
                     Edit Department
                </Typography>

            {/*DepartmentForm Component  */}
            <DepartmentsForm handleSubmit={handleSubmit}/>
       </CardContent>
       </Card>
    </div>
    )
}
export default connect()(DepartmentEdit)
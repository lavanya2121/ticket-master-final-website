import React from 'react'
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {findDepartment} from '../../selectors/departmentsSelector'

//material-ui
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import {Typography} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';

function DepartmentShow(props){
  
    const {_id,name}=props.department || {} 
    return(
        <div>
            <Card style={{width : "600px",margin : "0 auto"}}>
               <CardContent>
            {
                props.department?(
                <div>        
                    <Typography variant="h4" 
                                component="h4" 
                                style={{textAlign : "center",color:"blue"}}>
                                DEPARTMENT SHOW PAGE:
                    </Typography>
                <hr/>
                 
                 <Typography variant="h6" 
                             component="h6" 
                             style={{textAlign : "center"}}>
                    Department ID-{_id}
                </Typography>
                <hr/>

                   <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "center"}}>
                        Department Name-{name} <br/><hr/>
                </Typography>
                <hr/>
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "left",color:"blue"}}>
                  <Link to={`/departments/edit/${_id}`}  className="btn btn-primary">
                  <EditIcon titleAccess="Edit Customer" style={{marginTop : "3px",paddingRight:"5px"}}/>
                  EDIT DEPARTMENT
                  </Link><br/>
                </Typography>
                <br/>
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "left"}}>
                       <Link to='/departments' style={{color:"blue"}}>BACK</Link>
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
    return{
        department:findDepartment(state.departments,id)
    }
}
export default connect(mapStateToProps)(DepartmentShow)




import React from 'react'
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {findCustomer} from '../../selectors/customersSelector'

//material-ui
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import {Typography} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';

function CustomerShow(props){
    const {_id,name,mobile,email}=props.customer || {} 
    return(
        <div>
             <Card style={{width : "600px",margin : "0 auto"}}>
               <CardContent>
            {
                props.customer?(
                <div>        
                 
                 <Typography variant="h4" 
                             component="h4" 
                             style={{textAlign : "center",color:"blue"}}>CUSTOMER SHOW PAGE:
                </Typography>
                <hr/>
                 
                 <Typography variant="h6" 
                             component="h6" 
                             style={{textAlign : "center"}}>
                    Customer ID-{_id}
                </Typography>
                <hr/>

                   <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "center"}}>
                        Customer Name-{name} <br/><hr/>
                        Customer Email-{email} <br/><hr/>
                        Customer Mobile-{mobile}
                </Typography>
                
                <hr/>
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "left",color:"blue"}}>
                  <Link to={`/customers/edit/${_id}`}  className="btn btn-primary">
                  <EditIcon titleAccess="Edit Customer" style={{marginTop : "3px",paddingRight:"5px"}}/>
                  EDIT CUSTOMER
                  </Link><br/>
                </Typography>
                <br/>
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "left"}}>
                       <Link to='/customers' style={{color:"blue"}}>BACK</Link>
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
        customer:findCustomer(state.customers,id)
    }
}
export default connect(mapStateToProps)(CustomerShow)




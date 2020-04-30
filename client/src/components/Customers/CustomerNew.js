import React from 'react'
import {connect } from 'react-redux'
import {startAddCustomer} from '../../actions/customersAction'
import CustomersForm from './CustomersForm'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function CustomerNew(props){
    
    //handleSubmit eventHandler
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/customers')
        props.dispatch(startAddCustomer(formData,redirect))

    }
    return(
        <div>
             <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
            <CardContent>
                {/* Add Customer Label */}
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "center",color:"blue"}}>
                     ADD CUSTOMER
                </Typography>

            {/*CustomerForm Component  */}
           <CustomersForm handleSubmit={handleSubmit}/>
            </CardContent>
          </Card>
            
        </div>
    )
}
export default connect()(CustomerNew)

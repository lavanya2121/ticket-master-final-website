import React from 'react'
import {connect} from 'react-redux'
import {startUpdateCustomer} from '../../actions/customersAction'
import CustomersForm from './CustomersForm'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function CustomerEdit(props){
    
    //handleSubmit event handler
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        const redirect=()=>props.history.push('/customers')
        props.dispatch(startUpdateCustomer(formData,id,redirect))

    }
    return(
        <div>
            <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
             <CardContent>
                 {/* Customer Edit Label */}
                <Typography variant="h4" 
                            component="h4" 
                            style={{textAlign : "center",color:"blue"}}>
                     EDIT CUSTOMER
                </Typography>

            {/*CustomerForm Component  */}
            <CustomersForm handleSubmit={handleSubmit}/>
       </CardContent>
       </Card>
        </div>
    )
}
export default connect()(CustomerEdit)
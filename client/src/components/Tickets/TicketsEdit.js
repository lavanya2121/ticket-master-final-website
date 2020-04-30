import React from 'react'
import TicketForm from './TicketForm'
import {connect} from 'react-redux'
import {startUpdateTicket} from '../../actions/ticketsAction'
import {ticketFind} from '../../selectors/ticketsSelector'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function EditTicket(props){
    
    //handleSubmit event handler
    const id=props.match.params.id
    const redirect = () => {
        return props.history.push('/tickets')
    }
    const handleSubmit = (formData) => {
        props.dispatch(startUpdateTicket({formData,id,redirect}))
    }
    return(
        <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
             <CardContent>
                 {/* Employee Edit Label */}
                <Typography variant="h4" 
                            component="h4" 
                            style={{textAlign : "center",color:"blue"}}>
                     EDIT TICKET
                </Typography>

            {/*EmployeeForm Component  */}
            <TicketForm handleSubmit={handleSubmit}/>
       </CardContent>
       </Card>
      
    )
}

export default connect()(EditTicket)

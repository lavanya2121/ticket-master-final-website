import React from 'react'
import TicketForm from './TicketForm'
import {startAddTicket} from '../../actions/ticketsAction'
import {connect} from 'react-redux'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function AddTicket(props){
    const redirect = () => {
        return props.history.push('/tickets')
    }
    const handleSubmit = (formData) => {
        props.dispatch(startAddTicket({formData,redirect}))
    }
    return (
        <div>
        <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
              <CardContent>
                {/* Add Ticket Label */}
                <Typography variant="h6" 
                            component="h6" 
                            
                            style={{textAlign : "center",color:"blue"}}>
                     ADD TICKET
                </Typography>

            {/*TicketForm Component  */}
           <TicketForm handleSubmit={handleSubmit}/>
            </CardContent>
          </Card>
          </div>
    )
}

export default connect()(AddTicket)

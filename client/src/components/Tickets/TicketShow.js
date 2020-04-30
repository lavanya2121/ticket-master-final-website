import React from 'react'
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import {ticketFind } from '../../selectors/ticketsSelector'

//material-ui
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import {Typography} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function ShowTicket(props){
    const id = props.match.params.id
   
    return(
        <div className="container">
        <Card style={{width : "600px",margin : "0 auto"}}>
               <CardContent>
            {
                props.ticket?(
                <div>  
                    <Typography variant="h4" 
                             component="h4" 
                             style={{textAlign : "center",color:"blue"}}>
                             TICKET SHOW PAGE:
                    </Typography>
                <hr/>
                 
                 <Typography variant="h6" 
                             component="h6" 
                             style={{textAlign : "center"}}>
                </Typography>
                <hr/>

                   <Typography variant="h6" 
                               component="h6" 
                               style={{textAlign : "center"}}>

                     <List  style={{textAlign:"center"}}>
                        <ListItem button className="list-group-item">
                               ticket code - { props.ticket.code}
                        <ListItemText />
                    </ListItem>
                    <Divider />
                    <ListItem button className="list-group-item">
                        customer - { props.customer.find(cust=>cust._id == props.ticket.customer).name } 
                 <ListItemText />
             </ListItem>
             <Divider />

             <ListItem button className="list-group-item">
                        department - { props.department.find(depart=>depart._id == props.ticket.department).name}
                <ListItemText />
             </ListItem>
             <Divider />
             <ListItem button className="list-group-item">
                        priority - { props.ticket.priority}
                 <ListItemText />
             </ListItem>
             <Divider />
             <ListItem button className="list-group-item">
                        message - { props.ticket.message }
                <ListItemText />
             </ListItem>
             <Divider />
             <ListItem button className="list-group-item">
                        priority - {props.ticket.priority }
                 <ListItemText />
             </ListItem>
             <Divider />

                    </List>
                   </Typography>
                
                <hr/>
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "left",color:"blue"}}>
                  <Link to={`/tickets/edit/${id}`}  className="btn btn-primary">
                  <EditIcon titleAccess="Edit Employee" style={{marginTop : "3px",paddingRight:"5px"}}/>
                  EDIT TICKET
                  </Link><br/>
                </Typography>
                <br/>
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "left"}}>
                       <Link to='/tickets' style={{color:"blue"}}>BACK</Link>
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

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        ticket : ticketFind(state.tickets,id),
        customer : state.customers,
        department : state.departments,
        employee : state.employees
    }
}

export default withRouter(connect(mapStateToProps)(ShowTicket))

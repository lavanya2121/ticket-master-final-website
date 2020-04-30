import React from 'react'
import {connect} from 'react-redux'
import {startUpdateStatus,startRemoveTicket} from '../../actions/ticketsAction'
import {withRouter,Link} from 'react-router-dom'
import Swal from 'sweetalert2'

//material -ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Typography} from '@material-ui/core'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ListAltIcon from '@material-ui/icons/ListAlt';
import DeleteIcon from '@material-ui/icons/Delete';

class CompletedTicket extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    handleChange = (id) => {
        console.log('hii')
        const status = {
            isResolved: false
        }
        this.props.dispatch(startUpdateStatus({id,status}))
    }
    handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result)=>{
              if(result.value){
                this.props.dispatch(startRemoveTicket(id))
              }
          })
        
    }

    render(){
    return(
        <div>
             <Typography variant="h4" 
                        component="h4" 
                        style={{textAlign : "center",margin:"20px",color:"blue"}}>
                    
                       LIST OF COMPLETED TICKETS-{this.props.tickets.length}
            </Typography>
        
       
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Code No</TableCell>
                <TableCell align="left">Customer</TableCell>
                <TableCell align="left">Department</TableCell>
                <TableCell align="left">Employees</TableCell>
                <TableCell align="left">Message</TableCell>
                <TableCell align="left">Priority</TableCell>
                <TableCell align="left">Show</TableCell>
                <TableCell align="left">Remove</TableCell>
               
                <TableCell align="left">InComplete</TableCell>
              </TableRow>
            </TableHead>
           
            <TableBody>
              {this.props.tickets.map(ticket=>{
                            if(ticket.isResolved){
                                return(<TableRow key={ticket._id}>
                                             <TableCell component="th" scope="ticket">
                                             {ticket.code}
                                             </TableCell>
                                             <TableCell component="th" scope="ticket">
                                             { this.props.customer.find(cust=>cust._id == ticket.customer)?this.props.customer.find(cust=>cust._id == ticket.customer).name : 'loading'}
                                             </TableCell>
                                             <TableCell component="th" scope="ticket">
                                             { this.props.department.find(dept=>dept._id == ticket.department)?this.props.department.find(dept=>dept._id == ticket.department).name : 'loading'}
                                             </TableCell>
                                             <TableCell component="th" scope="ticket">
                                             {this.props.employee.length !== 0 && ticket.employees.map((tick,i)=>{
                                        return (
                                            <p key={i}>
                                                {
                                                    this.props.employee.find(ele=> ele._id == ticket.employees[i]._id) && this.props.employee.find(ele=> ele._id == ticket.employees[i]._id).name
                                                }
                                            </p>

                                        )
                                    })}
                                             </TableCell>
                                             <TableCell component="th" scope="ticket">
                                             {ticket.message}
                                             </TableCell>
                                             <TableCell component="th" scope="ticket">
                                             {ticket.priority}
                                             </TableCell>
                                             <TableCell component="th" scope="ticket">
                                             <Link to={`/tickets/${ticket._id}`}><button className="btn btn-primary  btn-sm"><ListAltIcon 
                                                style={{marginTop : "3px",paddingRight:"2px"}}/>Show</button></Link>
                                             </TableCell>
                                             <TableCell component="th" scope="ticket">
                                             <button className="btn btn-danger btn-sm" onClick={()=>{this.handleRemove(ticket._id)}}>
                                             <DeleteIcon titleAccess="Delete Employee" 
                                style={{marginTop : "3px",paddingRight:"2px"}}/>Remove</button>
                                             </TableCell>
                                             <TableCell component="th" scope="ticket">
                                             <input type="checkbox" checked={ticket.isResolved} onChange={()=>{this.handleChange(ticket._id)}} name="isResolved"/>
                                             </TableCell>
                                    </TableRow>)
                            }

                        })
              }
             
            </TableBody>
            </Table>
            </TableContainer>
        

        </div> 
    )
    }
}

const mapStateToProps = (state) => {
    return {
        tickets : state.tickets,
        customer : state.customers,
        department : state.departments,
        employee : state.employees
        
    }
}

export default withRouter(connect(mapStateToProps)(CompletedTicket))



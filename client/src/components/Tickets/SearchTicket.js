import React from 'react'
import {connect} from 'react-redux'
import {ticketFindCode} from '../../selectors/ticketsSelector'
import {startRemoveTicketSearch,startUpdateStatus} from '../../actions/ticketsAction'
import {Link,withRouter} from 'react-router-dom'
import Swal from 'sweetalert2'

//material -ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ListAltIcon from '@material-ui/icons/ListAlt';
import DeleteIcon from '@material-ui/icons/Delete';

class SearchTicket extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
     
     handleRemove = (id) => {
        const redirect = () => {
            return this.props.history.push('/tickets')
        }
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
                this.props.handleSearch()
                this.props.dispatch(startRemoveTicketSearch({id,redirect}))
              }
          })
        
    }
     handleChange = (id) => {
        const status = {
            isResolved: !this.props.ticket.isResolved
        }
        this.props.dispatch(startUpdateStatus({id,status}))
    }

    render(){
    return(
        <div>
        <Card style={{width : "1200px",margin : "0 auto",border : "1px"}}>
        <CardContent>
       
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
                <TableCell align="left">Complete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={this.props.ticket.id}>
                    <TableCell component="th" scope="ticket">
                            {this.props.ticket && this.props.ticket.code}
                    </TableCell>
                    <TableCell component="th" scope="ticket">
                            {this.props.customer.find(cust=>cust._id == this.props.ticket.customer)?this.props.customer.find(cust=>cust._id == this.props.ticket.customer).name : 'loading' }
                    </TableCell>
                    <TableCell component="th" scope="ticket">
                            {this.props.department.find(dept=>dept._id == this.props.ticket.department)?this.props.department.find(dept=>dept._id == this.props.ticket.department).name : 'loading' }
                    </TableCell>
                    <TableCell component="th" scope="ticket">
                           {/* {this.props.employee.length !== 0 && this.props.ticket.employees.map((tick,i)=>{
                                return <p key={i}>
                                {
                                    this.props.employee.find(ele=> ele._id == this.ticket.employees[i]._id) && this.props.employee.find(ele=> ele._id == this.ticket.employees[i]._id).name
                                }
                            </p>
                            })}  */}
                    </TableCell>
                    <TableCell component="th" scope="ticket">
                            {this.props.ticket && this.props.ticket.message }
                    </TableCell>
                    <TableCell component="th" scope="ticket">
                            {this.props.ticket && this.props.ticket.priority }
                    </TableCell>
                    <TableCell component="th" scope="ticket">
                            <Link to={`/tickets/${this.props.ticket._id}`}><button className="btn btn-info">
                            <ListAltIcon style={{marginTop : "3px",paddingRight:"2px"}}/>Show</button></Link> 
                    </TableCell>
                    <TableCell component="th" scope="ticket">
                    <button className="btn btn-danger" onClick={()=>{this.handleRemove(this.props.ticket._id)}}>
                    <DeleteIcon titleAccess="Delete Employee" 
                                style={{marginTop : "3px",paddingRight:"2px"}}/>Remove</button>
                    </TableCell>
                    <TableCell component="th" scope="ticket">
                    <input type="checkbox" checked={this.props.ticket.isResolved} onChange={()=>{this.handleChange(this.props.ticket._id)}} name="isResolved"/>
                    </TableCell>
                </TableRow>

            </TableBody>
            </Table>
            </TableContainer>
            </CardContent>
            </Card>
            
        </div>
    )
                }
}

const mapStateToProps = (state,props) => {
    const code = props.code
    return {
        ticket : ticketFindCode(state.tickets,code),
        customer : state.customers,
        department : state.departments,
        employee : state.employees
    }
}

export default withRouter(connect(mapStateToProps)(SearchTicket))
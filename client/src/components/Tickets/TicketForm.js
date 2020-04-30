import React from 'react'
import {connect} from 'react-redux'
import {ticketFind} from '../../selectors/ticketsSelector'

//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//SELECT
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            code : this.props.ticket ? this.props.ticket.code : '',
            customer : this.props.ticket ? this.props.ticket.customer : '',
            department : this.props.ticket ? this.props.ticket.department : '',
            employee : '',
            message : this.props.ticket ? this.props.ticket.message : '',
            priority : this.props.ticket ? this.props.ticket.priority : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            code : this.state.code,
            customer : this.state.customer,
            department : this.state.department,
            employees : [].concat({_id:this.state.employee}),
            message : this.state.message,
            priority : this.state.priority
        }
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                <Card style={{width : "600px",margin : "0 auto",border : "1px"}}>
                  <CardContent>
                    <Typography variant="h6" 
                                component="h6" 
                                style={{textAlign : "center",color:"blue"}}>
                          TICKET FORM
                    </Typography>

                    <form noValidate 
                      onSubmit={this.handleSubmit} 
                      autoComplete="off" 
                      style={{width : "100%"}}>

                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                     
                     {/* Code Number input field */}
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="code"
                        label="code"
                        name="code"
                        type="text"
                        autoComplete="code"
                        autoFocus
                        placeholder="Enter thecode"
                        value={this.state.code}
                        onChange={this.handleChange}
                        style={{width:"570px"}}
                    />
                </Grid>

                    <Grid item xs={12}>
                   {/* Customer Select input field  */}
                   <FormControl variant="outlined">
                        <InputLabel htmlFor="customer"></InputLabel>
                            <Select native
                                    value={this.state.customer} 
                                    onChange={this.handleChange}
                                    style={{width:"570px",textAlign:"center"}}
                                    inputProps={{
                                            name: "customer"
                                    }}>
                   
                                <option key="key_1">Select</option>
                                {
                                    this.props.customer && this.props.customer.map(customer=>{
                                    return <option value={customer._id} key={customer._id}>
                                            {customer.name}
                                           </option>
                                        })
                                }
          
                                </Select>
                        </FormControl>
                        </Grid>

                      
                    <Grid item xs={12}>
                    {/* Department Select input field  */}
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="department"></InputLabel>
                            <Select native
                                    value={this.state.department} 
                                    onChange={this.handleChange}
                                    style={{width:"570px",textAlign:"center"}}
                                    inputProps={{
                                            name: "department"
                                    }}>
                   
                                <option key="key_1">Select</option>
                                {
                                    this.props.department && this.props.department.map(department=>{
                                    return <option value={department._id} key={department._id}>
                                            {department.name}
                                           </option>
                                        })
                                }
                                </Select>
                        </FormControl>
                        </Grid>
                  
                    <Grid item xs={12}>
                    {/*Employee Select input field  */}
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="employee"></InputLabel>
                            <Select native
                                    value={this.state.employee} 
                                    onChange={this.handleChange}
                                    style={{width:"570px",textAlign:"center"}}
                                    inputProps={{
                                            name: "employee"
                                    }}>
                   
                                <option key="key_1">Select</option>
                                {
                                    this.props.employee && this.props.employee.map(employee=>{
                                    return <option value={employee._id} key={employee._id}>
                                            {employee.name}
                                           </option>
                                        })
                                }
          
                                </Select>
                        </FormControl>
                    </Grid>

                   
                   <Grid item xs={12}>
                    {/* Description input TextArea */}
                    <TextareaAutosize
                        variant="outlined"
                        margin="normal"
                        required
                        id="message"
                        label="message"
                        name="message"
                        autoComplete="message"
                        autoFocus
                        rowsMax={10}
                        style = {{ width : '570px'}}
                        cols="63"
                        aria-label="minimum height"
                        placeholder="Enter The Message"
                        onChange={this.handleChange}
                        value={this.state.message} 
                        />
                    </Grid>
                    
                    {/* <Grid item xs={12}>
                     <FormControl component="fieldset">
                        <FormLabel component="legend">Priority</FormLabel>
                            <RadioGroup aria-label="Priority">
                                <FormControlLabel value="high" name="priority"  id="high"  onClick={this.handleChange} control={<Radio />} label="high" />
                                <FormControlLabel value="medium" name="priority"  id="medium"  onClick={this.handleChange} control={<Radio />} label="medium" />
                                <FormControlLabel value="low" name="low"  onClick={this.handleChange} control={<Radio />} label="low" />
                            </RadioGroup>
                        </FormControl>
                    </Grid> */}
                    <Grid item xs={12}>
                    <div className="form-group">
                            <p>Priority</p>
                            <input type="radio" name="priority" value="high" id="high" onClick={this.handleChange}/>
                            <label htmlFor="high">high</label><br />
                            <input type="radio" name="priority" value="medium" id="medium" onClick={this.handleChange}/>
                            <label htmlFor="medium">medium</label><br />
                            <input type="radio" name="priority" value="low" id="low" onClick={this.handleChange}/>
                            <label htmlFor="low">low</label><br />
                    </div>
                    </Grid>
                    
                    <Grid item xs={12}>
                       {/*  Submit Button */}
                       <Button type="submit"
                             variant="contained" 
                             color="primary"
                             style = {{marginTop : "20px",width:"570px"}}>
                     SUBMIT
                    </Button>
                    </Grid>

                    </Grid>
                </form>
                </CardContent>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.id
    return {
        customer : state.customers,
        department : state.departments,
        employee : state.employees,
        ticket : ticketFind(state.tickets,id)
    }
}

export default connect(mapStateToProps)(TicketForm)

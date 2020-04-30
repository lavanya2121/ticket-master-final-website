import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {findEmployee} from '../../selectors/employeesSelector'

//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//SELECT
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class EmployeesForm extends React.Component{
    constructor(props){
        console.log('Employee form contructor',props)

        super(props)
        this.state={
            name:props.employees ? props.employees.name : '',
            email:props.employees ? props.employees.email : '',
            mobile:props.employees ? props.employees.mobile : '',
            department:props.employees ? props.employees.department.name :''
           
        }
    }

   handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value

        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department : this.state.department
        }
        console.log(formData)
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
                          EMPLOYEE FORM
                    </Typography>

                <form noValidate 
                      onSubmit={this.handleSubmit} 
                      autoComplete="off" 
                      style={{width : "100%"}}>
                
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                     
                     {/* Name input field */}
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="name"
                        label="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        autoFocus
                        placeholder="Enter name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        style={{width:"570px"}}
                    />
                </Grid>
    
                    <Grid item xs={12}>

                    {/* Email input field */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="email"
                        label="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        autoFocus
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        style={{width:"570px"}}
                    />
                  </Grid>
           
                    <Grid item xs={12}>

                      {/*Mobile input field  */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="mobile"
                        label="mobile"
                        name="mobile"
                        type="tel"
                        autoComplete="mobile"
                        autoFocus
                        placeholder="Enter mobile"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                        style={{width:"570px"}}
                       />
                    </Grid>
              
                    {/*Select input field  */}
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

                     {/*  Submit Button */}
                     <Button type="submit"
                             variant="contained" 
                             color="primary"
                             style = {{marginTop : "20px",width:"570px"}}>
                     SUBMIT
                    </Button>
            </Grid>
            </form>
            </CardContent>
            </Card>
        </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    //console.log('employee form',props)
    const id =props.match.params.id
    return{
        department:state.departments,
        employees:findEmployee(state.employees,id)
    }
}
export default withRouter(connect(mapStateToProps)(EmployeesForm))

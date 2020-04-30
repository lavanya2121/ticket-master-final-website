import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {findCustomer} from '../../selectors/customersSelector'

//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class CustomersForm extends React.Component{
    constructor(props){
        //console.log('customer form contructor',props)
        super(props)
        this.state={
            name:props.customer ? props.customer.name : '',
            email:props.customer ? props.customer.email : '',
            mobile:props.customer ? props.customer.mobile : '',
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        //console.log(formData)
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
                          CUSTOMER FORM
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
                        //fullWidth
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
              
                   {/*  Submit Button */}
                   <Button 
                        type="submit"
                        variant="contained" 
                        color="primary"
                        style = {{marginTop : "20px",width:"570px"}}
                     >
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
    console.log('customer form',props)
    const id =props.match.params.id
    return{
        customer:findCustomer(state.customers,id)
    }
}

export default withRouter(connect(mapStateToProps) (CustomersForm))
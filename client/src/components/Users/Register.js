import React from 'react'
import {connect } from 'react-redux'
import { startRegister } from '../../actions/userAction';
//import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//footer
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Ticket Master Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
class Register extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            email:'',
            password:'',
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
            username:this.state.username,
            password:this.state.password,
            email:this.state.email
        }
        const redirect=()=>{
         return this.props.history.push('/users/login')
        }

        this.props.dispatch(startRegister(formData,redirect))
    }
   
    render(){  
        //footer
        
        return(
            <div>
                 <Card style={{width : "600px",margin : "0 auto",border : "1px"}}>
                   <CardContent>
                   {/* <div className="d-flex justify-content-center" style={{margin:"auto"}}>
                   <Avatar className="d-flex justify-content-center">
                         <LockOutlinedIcon />
                   </Avatar>
                   </div> */}
                      <Typography variant="h6" 
                                  component="h6" 
                                  style={{textAlign : "center",color:"blue"}}>
                          Register with us
                      </Typography>

                <form noValidate 
                      onSubmit={this.handleSubmit} 
                      autoComplete="off" 
                      style={{width : "100%"}}>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                     
                     {/* Username input field */}
                     
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="username"
                        label="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        autoFocus
                        placeholder="enter username"
                        value={this.state.username}
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
                        placeholder="enter email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        style={{width:"570px"}}
                    />
                  </Grid>
                    

                    <Grid item xs={12}>

                      {/*Password input field  */}
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="password"
                        label="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        autoFocus
                        placeholder="enter password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        style={{width:"570px",marginTop : "20px"}}
                       />
                    </Grid>
                    <Grid item xs={12}>
            
                    <Grid item xs={12}>
                    <FormControlLabel
                       control={<Checkbox value="allowExtraEmails" 
                       color="primary" />}
                       label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                        </Grid>

            </Grid>
                   
                    <Grid item xs={12}>
                    {/*  Register Button */}
                    <Button 
                        type="submit"
                        margin="normal"
                        variant="contained" 
                        color="primary"
                        style = {{width:"570px"}}
                     >
                     Sign Up
                    </Button>
                    </Grid>

                    {/* Login Link */}
                    <Grid container>
                        <Grid item xs>
                           <Grid item style = {{textAlign : "right",marginTop : "20px"}}>
                           <Link href="/users/login" variant="body2">
                                    Already have an account? Sign in
                           </Link>
                           </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                 </form>
                    {/* footer */}
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                   </CardContent>
                </Card>
            </div>
        )  
    }

}

export default connect()(Register)


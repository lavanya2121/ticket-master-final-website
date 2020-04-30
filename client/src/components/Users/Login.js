import React from 'react'
import {connect } from 'react-redux'
import { startLogin } from '../../actions/userAction';
//import { Link } from 'react-router-dom'

//material -ui
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles'


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

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
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
            password:this.state.password,
            email:this.state.email
        }
        const redirect=()=>this.props.history.push('/')
        this.props.dispatch(startLogin(formData,redirect))
       
    }

  
      
    render(){
        return(
            
            <div>
            <Card style={{width : "600px",margin : "0 auto",border : "1px"}}>
               <CardContent>
               {/* <div>
                   <Avatar style={{alignSelf: 'center'}}>
                         <LockOutlinedIcon />
                   </Avatar>
                   </div> */}
                  <Typography variant="h6" 
                              component="h6" 
                              style={{textAlign : "center",color:"blue"}}>
                        Login with us
                   </Typography>
           <form noValidate 
                 onSubmit={this.handleSubmit} 
                 autoComplete="off" 
                 style={{width : "100%"}}>

           <Grid container spacing={2}>

             <Grid item xs={12}>

             {/* Email Text Field */}
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
                 {/* Password Text Field */}
                 <TextField
                   variant="outlined"
                   margin="normal"
                   required
                   id="password"
                   label="password"
                   name="password"
                   type="password"
                   autoComplete="current-password"
                   autoFocus
                   placeholder="enter password"
                   value={this.state.password}
                   onChange={this.handleChange}
                   style={{width:"570px"}}
                  />
                 </Grid>


                <Grid item xs={12}>
                 {/* Remember Me check box */}
                 <FormControlLabel
                       control = { <Checkbox value = "remember" 
                                             color = "primary" /> 
                                  }
                       label = "Remember me"
                  />
                </Grid>

               <Grid item xs={12}>
               {/* Login Button */}
               <Button 
                   type="submit"
                   //fullWidth
                   variant="contained" 
                   color="primary"
                   style = {{marginTop : "20px",width:"570px"}}
                   >Sign In
               </Button>
               </Grid>
            
                {/* Register Link */}
               <Grid container>
                   <Grid item xs>
                   <Grid item style = {{textAlign : "right",marginTop : "20px"}}>
                   <Link href="/users/register" variant="body2">
                                    Already have an account? Sign Up
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

export default connect()(Login)
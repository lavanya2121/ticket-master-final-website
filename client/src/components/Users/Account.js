//to get the profile page of the user when the user is alredy logged in he can see his details
import React from 'react';
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'

//material-ui
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'

function Account(props){
       //console.log("Account-->User Profile",props)
    return(
        <div>
           <Card style={{width : "600px",margin : "0 auto",padding:"30px",marginTop:"20"}}>
               <CardContent>
       
            {/* User Profile/logged-in Information */}
            <Typography variant="h4" 
                            component="h4" 
                            style={{textAlign : "center",color:"blue"}}>
                    USER ACCOUNT/PROFILE INFORMATION:<br/>
            </Typography>
            <hr/>
            <Typography variant="h6" 
                        component="h6" 
                        style={{textAlign : "center"}}>
                    User-ID:   {props.user._id}<br/><hr/>
                    User-Name:   { props.user.username }<br/><hr/>
                    User-Email:   { props.user.email }<br/><hr/>
            </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(Account)
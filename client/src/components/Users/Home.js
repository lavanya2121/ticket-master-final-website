import React from 'react'
import download1 from '../../images/download1.jpg'

//material ui
import {Typography} from '@material-ui/core'

function Home(){
    return(
        <div>
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "center", color:"blue",marginBottom:"30px"}}>
                            WELCOME TO TICKET MASTER  HOME COMPONENT
                </Typography>
            <div className="container" style={{backgroundImage:`url(${download1})`,backgroundSize:'cover',width:'1350px',height:'800px'}}></div>
        </div>
    )
}
export default Home
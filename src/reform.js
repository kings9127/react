import {Avatar, Grid, Paper,TextField} from "@mui/material";
import React from "react";
import './App.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function Formex()
{
    const paperStyle={padding:20,height:'70vh',width:280,margin:"20px auto"}
    return(
        <Grid>
            

            <Paper elevation={10} style={paperStyle} className="back">
                <h2>REGISTRATION..!</h2>
                <div className="al">
                <Avatar><LockOutlinedIcon/></Avatar>
                <br></br>
                <br></br>
                <br></br>
                </div>
                <div>
                <TextField id="outlined-basic" label="USERNAME" variant="outlined"/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="EMAIL" variant="outlined" />
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="PHONE NUMBER" variant="outlined" />
                <br></br>
                <br></br>
                <TextField type="password" id="outlined-basic" label="PASSWORD" variant="outlined" />
                <br></br>
                <br></br>
            </div>
            </Paper>
           
        </Grid>
    )
}   
export default Formex;
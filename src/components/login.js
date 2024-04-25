import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LocationCityIcon from '@mui/icons-material/LocationCity';


const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:280,margin:"19px auto" ,backgroundColor:'#E6F4F1', borderRadius: '12px', boxShadow: '0px 0px 8px rgba(0, 0, 0, 25)'}
    const avatarStyle={backgroundColor:'#D9D9D9'}
    const btnstyle={backgroundColor:'#1B6DA1',margin:'12px 0'}
    const logoStyle={backgroundColor:'#D9D9D9', margin:'10px 0', width: 70, height: 70}
      

    return(
        
        <Grid>
                <Grid align='center'>
                    <Avatar style={logoStyle}><LocationCityIcon style={{ color: '#002A57', width: 56, height: 56}}/></Avatar>
                    <h2>Company Name</h2>
                </Grid>  
             
            
            <Paper elavation={12} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon style={{ color: '#002A57' }}/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField id="standard-basic" label="Username" variant="standard" placeholder='Enter Your Username' fullWidth required/>
                <TextField id="standard-basic" label="Password" variant="standard" placeholder='Enter Your Password' type='password' fullWidth required/>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />

                <Button style={btnstyle} type='submit' color='primary' variant="contained" fullWidth>Login</Button>
                <Typography>
                    <Link href="#" >
                        Forgot Password?
                    </Link>
                </Typography>

                <Typography>Don't have an account?
                    <Link href="#" >
                        Sign Up Here.
                    </Link>
                </Typography>
            </Paper>
        </Grid>
        
    )
}

export default Login
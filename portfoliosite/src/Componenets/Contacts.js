import React,{useState} from 'react';
import {TextField,Button,Typography,Grid,Box} from '@material-ui/core';
import {makeStyles,withStyles} from '@material-ui/core/styles';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import Snackbar from '@material-ui/core/Snackbar';
import emailjs from 'emailjs-com';
        
const Inputfield=withStyles({
    root:{
        '& label.Mui-focused':{
            color:'tomato',
        },
        '& label':{
            color:'whitesmoke'
        },
        '& .MuiOutlinedInput-root':{
            '& fieldset':{
                borderColor:'white',
            },
            '&:hover fieldset':{
                borderColor:'crimson',
            }
        }

    }
})(TextField)

const useStyles=makeStyles( (theme) => ({

    form:{
        margin:'5rem auto',
        textAlign:'center',
    },
    heading:{
        marginBottom:'2rem',
        color:'whitesmoke',
        fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        opacity:0.8,
        fontSize: 48,
        fontWeight:500,
    },
    button:{
        marginTop:'1rem',
        color:'whitesmoke',
        borderColor:'teal',
    }

}));





export default function Contacts(){

    const classes= useStyles();
    const [state,setState] = useState ({
        Name:"",
        email:"",
        message:"",
        success:"",
    });
    
    let templateVars= {
        name:state.Name,
        from_email:state.email,
        message:state.message
    };

    
    const sendEmail=(event) => {
        event.preventDefault();
        console.log(state)
        console.log(templateVars)
        emailjs.send(
            'gmail',
            'ripudaman_template',
            templateVars,
            'user_ayV8gcoYmRslatk5VoUgj'
        )
        .then(() => {successMessage()}
            
            , (error) => {
            errorMessage()
        });
        setState({
            Name:"",
            email:"",
            message:""
        })
    };


    const successMessage = () => {
        setState(prevstate => {
            return { ...prevstate, success:'true' };
          });
        };
    
        
    
    const errorMessage =() => {
        setState(prevstate => {
            return { ...prevstate, sucess:'false' };
          });
        };
    
    const nameChange = e => {
        e.persist();
        setState(prevstate => {
          return { ...prevstate, Name: e.target.value };
        });
      };
    
      const emailChange = e => {
        e.persist();
        setState(prevstate => {
          return { ...prevstate, email: e.target.value };
        });
      };
    
      const messageChange = e => {
        e.persist();
        setState(prevstate => {
          return { ...prevstate, message: e.target.value };
        });
      };

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setState(prevstate => {
            return { ...prevstate, success:"" };
          });
        
      };
    
    
        let notification;

        if (state.success==='true') {
        notification=<Snackbar open='true' autoHideDuration={6000} 
        onClose={handleClose}
        message="Your email has been sent"
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }} />} ;

        if (state.success==='false') { 
        notification=<Snackbar open='true' autoHideDuration={6000} 
        onClose={handleClose}
        message="Message not sent, an error occured"
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
        />}

    return(
          <Box component='div' height='100vh'>
            <Grid container justify='center' className={classes.form} >
                <Grid  item xs={10} sm={8} md={8}>
                    <Typography variant="h2" className={classes.heading}>Contact Me</Typography>
                </Grid>
                <Grid  item xs={10} sm={8} md={8}>
                    <Inputfield name="client" value={state.Name || ""}  onChange={nameChange} color="secondary"
                       label="Name" variant='outlined' fullWidth={true} margin='dense' inputProps={{style:{color:'whitesmoke'}}} />
                </Grid>
                <Grid  item xs={10} sm={8} md={8}>
                    <Inputfield name="sender" value={state.email || ""}  onChange={emailChange} color="secondary"
                     label="E-Mail" variant='outlined' fullWidth={true} margin='dense' inputProps={{style:{color:'whitesmoke'}}} />
                </Grid>
                <Grid  item xs={10} sm={8} md={8}>
                    <Inputfield name="message" value={state.message || ""} onChange={messageChange} color="secondary"
                     label="Message" variant='outlined' multiline rows={4} fullWidth={true} margin='dense' inputProps={{style:{color:'whitesmoke'}}} />
                </Grid>
                <br />
                <Grid  item xs={10} sm={8} md={8}>

                    <Button  variant='outlined' className={classes.button} 
                     fullWidth={true} endIcon={<SendRoundedIcon />} onClick={sendEmail}>
                        Send
                    </Button>

                    {notification}              

                    
                </Grid>
                

            </Grid>
        
        </Box>

        
    )
    }

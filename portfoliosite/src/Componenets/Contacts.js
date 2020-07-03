import React from 'react';
import {TextField,Button,Typography,Grid,Box} from '@material-ui/core';
import {makeStyles,withStyles} from '@material-ui/core/styles';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const Inputfield=withStyles({
    root:{
        '& label.Mui-focused':{
            color:'tomato',
        },
        '& label':{
            color:'whitesmoke'
        },
        '& ,MuiOutlinedInput-root':{
            '& fieldset':{
                borderColor:'white',
            }
        }

    }
})(TextField)

const useStyles=makeStyles( theme => ({

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

function Contacts(){

    const classes= useStyles();
    return(
        <Box component='div' height='100vh'>
            <Grid container justify='center' className={classes.form} >
                <Grid item xs={10} sm={8} md={8}>
                    <Typography variant="h2" className={classes.heading}>Contact Me</Typography>
                    <Inputfield label="Name" variant='outlined' fullWidth={true} margin='dense' inputProps={{style:{color:'whitesmoke'}}} />
                    <Inputfield label="E-Mail" variant='outlined' fullWidth={true} margin='dense' inputProps={{style:{color:'whitesmoke'}}} />
                    <Inputfield label="Message" variant='outlined' multiline rows={4} fullWidth={true} margin='dense' inputProps={{style:{color:'whitesmoke'}}} />
                    <br />
                    <Button variant="outlined" fullWidth={true} endIcon={<SendRoundedIcon />} className={classes.button}>
                        Send
                    </Button>
                    
                </Grid>
                

            </Grid>
        
        </Box>
    )
}

export default Contacts
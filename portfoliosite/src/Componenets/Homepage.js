import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
     
const useStyle = makeStyles((theme) => ({

    header:{
        color: 'whitesmoke',
        opacity: 0.8,
        fontSize: 70,
        fontFamily: '-apple-system, BlinkMacSystemFont',
        fontWeight: 500,
        paddingTop:theme.spacing(7)
    },

    footer:{
        fontSize:48,
        color:'whitesmoke',
        fontWeight:500,
        marginBottom:theme.spacing(2),
        marginTop:theme.spacing(45),
    }

}));

function Homepage(){

    const classes= useStyle();

    return(   
        
            <Grid className="description" direction='coloumn' justify='space-between' alignItems='center'>
                <Typography  variant= 'h1' className={classes.header}>Hi, <span style={{fontSize:'48px'}}>I AM RIPUDAMAN</span> </Typography>              

                <Typography  variant='h2' className={classes.footer}>
                    Full-Stack Developer
                </Typography>
                
            </Grid>

              
            
        
        
            
            

    )
}

export default Homepage
import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
     
const useStyle = makeStyles((theme) => ({

    header:{
        color: 'whitesmoke',
        opacity: 0.8,
        fontSize: 70,
        fontFamily: '-apple-system, BlinkMacSystemFont',
        fontWeight: 500,
        paddingTop:theme.spacing(4)
    },

    footer:{
        fontSize:48,
        color:'whitesmoke',
        fontWeight:500,
        paddingTop:theme.spacing(42),
    }


}));

function Homepage(){

    const classes= useStyle();

    return(   
        <Box className='description'>

            <Grow in='true' timeout={3000} >
                <Typography  variant= 'h1' className={classes.header}>Hi, <span style={{fontSize:'48px'}}>I AM RIPUDAMAN</span> </Typography>              
            </Grow>
                    

            <Typography  variant='h2' className={classes.footer}>
                Full-Stack Developer
            </Typography>

        </Box>
            
                    

               
                
                
            

              
            
        
        
            
            

    )
}

export default Homepage
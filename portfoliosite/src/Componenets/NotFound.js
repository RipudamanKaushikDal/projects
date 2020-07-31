import React from 'react';
import { Typography, Box, IconButton } from '@material-ui/core';
import SentimentVeryDissatisfiedRoundedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';

function NotFound(){
    return(
        <Box style={{width:"100vw",height:"100vh"}}>
            <div className="error">
                <Typography variant="h1" color="secondary" align="center" >
                    404
                </Typography>
                <IconButton color="secondary" size="medium">
                    <SentimentVeryDissatisfiedRoundedIcon/>
                </IconButton>
                <Typography variant="h5" color="error">
                    Menu is the answer
                </Typography>
            </div>
        </Box>
        
    )
}

export default NotFound
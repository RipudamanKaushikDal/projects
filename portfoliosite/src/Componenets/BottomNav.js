import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles= makeStyles({
    root:{
            minWidth:0,
            maxWidth:200,
            width:'100%',
            margin:'0 0 0 0',
            padding:'0 0 0 0',
            background:'grey',
            opacity:0.9
        },
    icons:{
        padding:0,
        "& .MuiSvgIcon-root":{
            fill:'white',
            "&:hover":{
                fill:'tomato',
                fontSize:'1.8rem'
            }
        }
    },


})

function BottomNav(){
    
    const classes =useStyles();

    return(
        <BottomNavigation className={classes.root}>


            <BottomNavigationAction  className={classes.icons} icon={<LinkedInIcon/>} />

            <BottomNavigationAction   className={classes.icons} icon={<InstagramIcon />} />

            <BottomNavigationAction   className={classes.icons} icon={<GitHubIcon />} />

        </BottomNavigation>
    )
}

export default BottomNav 
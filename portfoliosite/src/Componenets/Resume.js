import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    leftContainer:{
        margin:'1rem auto',
        height:'100%',
        direction:'coloumn'
    },
    rightContainer:{
        margin:'1rem auto',
        height:'100%',
        background:'midnightblue',
        color:'white'
    },
    skillHeading:{
        color:'whitesmoke',
        margin:'0 2rem 0 2rem',
        opacity:0.8,
        fontSize: 48,
        fontWeight:500,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        borderBottom: 'white dotted',
    },
    skills: {
        justify: 'center',
        paddingBottom:theme.spacing(2),
        direction:'column',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    
}))


const skills =[{label:"ReactJS",color:"secondary"},{label:"Python",color:"primary"},
{label:"JavaScript",color:"secondary"},{label:"Html5",color:"primary"},
{label:"CSS3",color:"secondary"},{label:"C#/.NET",color:"primary"},
{label:"OpenCV",color:"secondary"},{label:"Docker",color:"primary"}]

function Resume(){

    const classes= useStyles();

    return(
        <Grid container>
            <Grid container className={classes.leftContainer} justify='center' xs={4} sm={4} md={4} >
                <Grid item>
                <Typography variant='h1' className={classes.skillHeading}>Skills</Typography>
                </Grid>
                
                <Grid  item className={classes.skills}>
                    {skills.map((skill) => (
                         <Chip
                         variant="default"
                         size="medium"
                         icon={< CodeRoundedIcon/>}
                         label={skill.label}
                         color={skill.color}
                         />      
                        )
                    )}
                </Grid>


            </Grid>

            <Grid container className={classes.rightContainer} justify='center' xs={8} sm={6} md={6} lg={4}>
                <Typography variant="h2">Education</Typography>

            </Grid>

        </Grid>
    )
}

export default Resume
import React from 'react';
import {Grid,Typography,Avatar,LinearProgress} from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import { makeStyles } from '@material-ui/core/styles';
import Education from './Education';
import photo from '../images/Resumephoto.jpg';

const useStyles = makeStyles((theme) => ({

    leftContainer:{
        margin:'1rem auto',
        height:'100%',
        direction:'column',
        textAlign:'center',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    useravatar:{
        display: 'block',
        margin:'1rem auto',
        width: theme.spacing(30),
        height: theme.spacing(30)
    
      },
    rightContainer:{
        margin:'2rem auto',
        height:'100%',
        background:'black',
        color:'white',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    heading:{
        color:'whitesmoke',
        margin:' 1rem auto',
        opacity:0.8,
        fontSize: 48,
        fontWeight:500,
        borderBottom:'dotted',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    skills: {
        justify: 'center',
        width:'50%',
        padding:'0.5rem 0 1rem 5rem ',
        '& > *': {
            margin: theme.spacing(0.7),
        },
    },

    
}))


const skills =[{label:"ReactJS",color:"secondary",level:95},{label:"Python",color:"primary",level:95},
{label:"JavaScript",color:"secondary",level:80},{label:"Html5",color:"primary",level:80},
{label:"C#/.NET",color:"secondary",level:70},{label:"CSS3",color:"primary",level:70},
{label:"OpenCV",color:"secondary",level:60},{label:"Docker",color:"primary",level:50}]

function Resume(){

    const classes= useStyles();

    return(
        <Grid container style={{height:'100%'}}>
            <Grid container className={classes.leftContainer} justify='center'  direction='column' xs={8} md={4}   >
                <Grid item >
                    <Avatar  className={classes.useravatar} src={photo} alt='Resume pic' />
                </Grid>

                <Grid item >
                    <Typography variant='h1' className={classes.heading}>Bio</Typography>
                    <Typography variant='body1' style={{color:'whitesmoke'}}>
                        A Full-Stack Developer with keen interest in programming and machine learning. Having a natural affinity towards problem solving and eagerness to learn new things motivate me to take on new challenges and roles in life.
                    </Typography>
                </Grid>

                <Grid item>
                <Typography variant='h1' className={classes.heading} >Skills</Typography>
                </Grid>
                
                <Grid  item className={classes.skills} direction='column' >
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

            <Grid container className={classes.rightContainer} justify='center' xs={10}  md={7} lg={4}>
                <Grid item>
                <Typography variant="h1" className={classes.heading}>Education</Typography>
                </Grid> 
                

                <Education startYear="2018" endYear="2020" schoolName="Dalhousie University"
                            schoolAchievement="1. Got Academic Scholarship in 7 out of 10 subjects"
                            schoolgpa="2. 4.06 CGPA" />
            
                <Education startYear="2013" endYear="2017" schoolName="Punjabi University"
                            schoolAchievement="1. Got A+ in the final project presentation"
                            schoolgpa="2. 7.35 CGPA" />

                <Grid item>
                <Typography variant="h1" className={classes.heading}>Skill Evaluation</Typography>
                </Grid>

                <Grid container direction='column'>
                    {skills.map((skill) => (
                        <div style={{padding:'0.5rem 0.5rem 0.5rem 0.5rem'}} >
                        <Typography variant="h5">{skill.label}</Typography>
                        <LinearProgress
                         variant="determinate"
                         value={skill.level}
                         color={skill.color}  
                         />  
                        </div>   
                        )
                    )}
                </Grid>
                    

            </Grid>

        </Grid>
    )
}

export default Resume
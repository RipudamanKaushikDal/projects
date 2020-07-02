import React from 'react'
import Chip from '@material-ui/core/Chip';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import me from '../images/me.jpg';
import { Box,Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    bio:{
        margin:'3rem auto',
        maxWidth:340
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
        display: 'flex',
        justifyContent: 'center',
        paddingBottom:theme.spacing(2),
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    }
}))

function AboutMe(){

    const classes = useStyles();
    return(
      <Box style={{height:'100%'}} >
        <Grid container justify='center'>
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.bio}>
                  <CardActionArea>
                      <CardMedia 
                        style={{height:300}}
                        image={me}
                        title="Dev"
                        />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Ripudaman Kaushik
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            I am a full-stack developer who loves to code. On a constant lookout for fresh ideas
                            and new technologies to learn. My mantra "Eager to Start, Determined to Finish."
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
        </Grid>
            <Typography variant='h1' className={classes.skillHeading}>Skills</Typography>
            
            <div className={classes.skills}>
                <Chip
                variant="default"
                size="medium"
                icon={< CodeRoundedIcon/>}
                label="ReactJS"
                color="secondary"
                /> 

                <Chip
                variant="default"
                size="medium"
                icon={< CodeRoundedIcon/>}
                label="Python"
                color="primary"
                />  

                <Chip
                variant="default"
                size="medium"
                icon={< CodeRoundedIcon/>}
                label="Javascript"
                color="secondary"
                /> 

                <Chip
                variant="default"
                size="medium"
                icon={< CodeRoundedIcon/>}
                label="HTML5"
                color="primary"
                />  

                <Chip
                variant="default"
                size="medium"
                icon={< CodeRoundedIcon/>}
                label="CSS3"
                color="secondary"
                /> 

                <Chip
                variant="default"
                size="medium"
                icon={< CodeRoundedIcon/>}
                label="Docker"
                color="primary"
                />  

                <Chip
                variant="default"
                size="medium"
                icon={< CodeRoundedIcon/>}
                label="C#/.NET"
                color="secondary"
                /> 

                <Chip
                variant="default"
                size="medium"
                icon={< CodeRoundedIcon/>}
                label="OpenCV"
                color="primary"
                />  




                </div>


        
        </Box>
    )
}

export default AboutMe
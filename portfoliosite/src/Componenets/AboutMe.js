import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import me from '../images/me.jpg';
import { Box, Grid, CardActions, IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    bio:{
        margin:'1.5rem auto',
        width:'90%'
    },
   
}))

function AboutMe(){

    const classes = useStyles();
    return(
      <Box style={{height:'100%'}} >
        <Grid container justify='center'>
            <Grid item xs={12} sm={10} md={10}>
                <Card className={classes.bio}>
                  <CardActionArea>
                      <CardMedia 
                        style={{height:460}}
                        image={me}
                        title="Dev"
                        />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
                            Ripudaman Kaushik
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            I am a full-stack developer who loves to code. On a constant lookout for fresh ideas to pick up 
                            and new things to learn. Space is my ideal destination, Music is where I wander-in, to get lost and Stories are what help me navigate.
                            A firm believer in the principle "A healthy mind inhabits a healthy body." 
                            My mantra "Eager to Start and Determined to Finish."
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions >
                      <IconButton color="secondary" href="https://github.com/RipudamanKaushikDal" target="_blank">
                            <GitHubIcon />
                      </IconButton>
                      <IconButton color="secondary" href="https://www.linkedin.com/in/ripudamankaushik" target="_blank">
                            <LinkedInIcon />
                      </IconButton>
                      <IconButton color="secondary" href="https://www.instagram.com/ripudamankaushik/"  target="_blank" >
                            <InstagramIcon />
                      </IconButton>
                  </CardActions>
                </Card>
            </Grid>
        </Grid>
        
        </Box>
    )
}

export default AboutMe
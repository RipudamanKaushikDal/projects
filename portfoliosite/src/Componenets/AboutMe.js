import React from 'react'
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
                            I am a full-stack developer who loves to code. On a constant lookout for fresh ideas
                            and new technologies to learn. My mantra "Eager to Start, Determined to Finish."
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
        </Grid>
        
        </Box>
    )
}

export default AboutMe
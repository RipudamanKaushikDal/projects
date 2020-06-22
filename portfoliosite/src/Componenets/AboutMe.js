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


const useStyles = makeStyles((theme) => ({
    skills: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    }
}))

function AboutMe(){

    const classes = useStyles();
    return(
        <div className="bio">
            <Card style={{maxWidth:360,marginTop:15,alignSelf:'center'}}>
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
            <h1>Skills</h1>
            
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


        
        </div>
    )
}

export default AboutMe
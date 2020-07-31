import React from 'react';
import {Box,Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import CardActions  from '@material-ui/core/CardActions';
import card1 from '../images/projectimages/search1.png'
import card2 from '../images/projectimages/attendanceapp7.jpg'
import card3 from '../images/projectimages/watchdrone1.jpg'
import card4 from '../images/projectimages/Reardo5.png'
import {
  Route,
  Link as RouterLink ,
  useRouteMatch
} from "react-router-dom";
import ProjectDetails from './ProjectDetails';


const useStyles=makeStyles({
  projects:{
    height:'100%'
  },

  cards:{
    maxWidth:300,
    margin:'3rem auto',
  }
})


function Projects(){
  let {path,url} = useRouteMatch();

  const classes=useStyles();

    return(
      <Box component='div' className={classes.projects} >
        <Grid container justify='center' >

        <Grid item xs={12} sm={8} md={6} >
            <Card className={classes.cards}  >
                  <CardActionArea component={RouterLink} to={`${url}/reardo`}>
                      <CardMedia 
                        style={{height:265}}
                        image={card4}
                        />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Reardo Manga Reader
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A native Android app to read your favorite manga/manhwa online
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <Button size="medium" target="_blank" color="secondary" href="https://drive.google.com/file/d/1nIicu9c9rJa39rd8f7RF0_RM43BU7oKu/view?usp=sharing">
                        Download
                    </Button>
                    <Button size="medium" target="_blank" color="secondary" href="https://github.com/RipudamanKaushikDal/native/tree/master/Reardo">
                        Github
                    </Button>
                    <Button size="medium" target="_blank" color="secondary" href="https://www.linkedin.com/posts/ripudamankaushik_xamarin-mobileapp-manga-activity-6693948329044402176-GgmQ">
                        LinkedIn
                    </Button>
                  </CardActions>
            </Card>
          </Grid>

         <Grid item xs={12} sm={8} md={6} >
            <Card className={classes.cards}  >
                  <CardActionArea component={RouterLink} to={`${url}/search_gallery`}>
                      <CardMedia 
                        style={{height:200}}
                        image={card1}
                        />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Image Search Gallery
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A WebApp that makes use of AI to find similar images in a sea fo images.
                            The AI algorithms are deployed in a self-made Web-server and the whole app is hosted in Docker
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="medium" target="_blank" color="secondary" href="https://github.com/RipudamanKaushikDal/projects/tree/master/image_search_gallery">
                        Github
                    </Button>
                    <Button size="medium" target="_blank" color="secondary" href="https://www.linkedin.com/posts/ripudamankaushik_webapplication-fullstackdevelopment-pyimagesearch-activity-6672958331415539712-4RHS">
                        LinkedIn
                    </Button>
                  </CardActions>
            </Card>
            </Grid>
  
          <Grid item xs={12} sm={8} md={6} >
            <Card className={classes.cards}  >
                  <CardActionArea component={RouterLink} to={`${url}/attendance_app`}>
                      <CardMedia 
                        style={{height:200}}
                        image={card2}
                        />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Automated Attendance App
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            App to recognize students in a class and mark their attendance.
                            It also forwards the daily attendance record to a specified professor's mail.
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="medium" target="_blank" color="secondary" href="https://github.com/RipudamanKaushikDal/projects/tree/master/face_recognition/GUI">
                        Github
                    </Button>
                    <Button size="medium" target="_blank" color="secondary" href="https://www.linkedin.com/posts/ripudamankaushik_python-kivy-opencv-activity-6637067291316060160-HpjN">
                        LinkedIn
                    </Button>
                  </CardActions>
            </Card>
          </Grid>
        
          <Grid item xs={12} sm={8} md={6} >
            <Card className={classes.cards} >
                  <CardActionArea component={RouterLink} to={`${url}/watch_drone`}>
                      <CardMedia 
                        style={{height:230}}
                        image={card3}
                        />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Watch Drone
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A WebApp designed to help people to search their favourite tv-shows and movies.
                            It also lets them watch their trailers on Youtube. 
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="medium" target="_blank" color="secondary" href="https://github.com/RipudamanKaushikDal/projects/tree/master/Web%20Development/React/watchdrone">
                        Github
                    </Button>
                    <Button size="medium" target="_blank" color="secondary" href="https://www.linkedin.com/posts/ripudamankaushik_react-reactjs-api-activity-6662799750821228544-0q-G">
                        LinkedIn
                    </Button>
                  </CardActions>
            </Card>

          </Grid>
        </Grid>

          
        <Route path={`${path}/:appName`} component={ProjectDetails} />


      </Box>

         
            


        
        
    )
}

export default Projects
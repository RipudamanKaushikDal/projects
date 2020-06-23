import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import CardActions  from '@material-ui/core/CardActions';
import card1 from '../images/project card1.png'
import card2 from '../images/project card2.png'
import card3 from '../images/project card3.jpg'

/*const [state,setState]=useState({
    index:null
})

const chooseView=(number) => {
    setState=() => {return{index:number}}

}*/

function Projects(){
    return(
        <>
         <div className="projects">
            <Card style={{maxWidth:300,marginTop:15}}  >
                  <CardActionArea>
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
                    <Button size="medium" color="secondary">
                        Github
                    </Button>
                    <Button size="medium" color="secondary">
                        LinkedIn
                    </Button>
                  </CardActions>
            </Card>

            <Card style={{maxWidth:300,marginTop:15,marginLeft:60}}  >
                  <CardActionArea>
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
                    <Button size="medium" color="secondary">
                        Github
                    </Button>
                    <Button size="medium" color="secondary">
                        LinkedIn
                    </Button>
                  </CardActions>
            </Card>

            <Card style={{maxWidth:300,marginTop:30}}  >
                  <CardActionArea>
                      <CardMedia 
                        style={{height:200}}
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
                    <Button size="medium" color="secondary">
                        Github
                    </Button>
                    <Button size="medium" color="secondary">
                        LinkedIn
                    </Button>
                  </CardActions>
            </Card>


          </div>
            


        
        </>
    )
}

export default Projects
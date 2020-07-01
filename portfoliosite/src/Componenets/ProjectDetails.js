import React,{useState} from 'react';
import {  useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {useParams} from "react-router-dom";

function importAll(r) {
    let images = {};
    // eslint-disable-next-line
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images/projectimages', false, /\.(png|jpe?g|svg)$/));


const projectStuff ={
    attendance_app:{
      pics:[images['attendanceapp1.jpg'],images['attendanceapp2.jpg'],images['attendanceapp3.jpg'],images['attendanceapp4.jpg'],images['attendanceapp5.jpg'],images['attendanceapp6.jpg'],images['attendanceapp7.jpg']],
      text:`Built my first app Automated Attendance System with python and Kivy framework. Uses facial recognition libraries and open cv to detect faces and uses sqlite3 database for storage. Also added email capabilities for that extra spice....;) #python #Kivy #opencv`
    }, 

    search_gallery:{
      pics:[images['search1.png'],images['search2.png'],images['search3.png'],images['search4.png'],images['search5.png']],
      text:`Finally!!!...It took me some time, but I have finally built a #webapplication that blends various technologies, all of which together pave the way to #fullstackdevelopment . It is what i call 'Image Search Gallery' as it helps to find similar images in a collection of images and can potentially scale upto millions (inspired by Adrian Roseberck's post over at #pyimagesearch.com). It is structured as follows:

        Back-end: A server written in #python using #flask, deployed in a custom #docker container which has #opencv installed in it. The server also has a local database of images which is a subset of #Caltech101dataset .
      
        Front-end: Designed completely in #reactjs and styled using #css3 and also deployed in a #docker container. It fetches data from the server to display and search images.`
    },    
    
    watch_drone:{
        pics:[images['watchdrone1.jpg'],images['watchdrone2.jpg'],images['watchdrone3.jpg']],
        text:`Quarantine presented me with an opportunity to learn something new, so I picked up React, but I also wanted to find some new shows to watch or catch up to my favorite ones at the same time. So I decided to build an application which fulfills both of my wishes.
              A 'Watch Drone' that searches the OMDB API for shows giving their rating and description and also gives the user an option to watch it on YouTube launching you straight into a binge watch.`
    },
  }
    

function ProjectDetails(){
  const {appName} =useParams();
  const chosenProject= projectStuff[appName]

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = chosenProject.pics.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return(
    <div className='projectdetails'>
      
      <div className='screenshots'>

          <h3 style={{borderBottom:'dotted',fontSize:30,alignSelf:'center'}}>Screenshots</h3>
          <img
            src={chosenProject.pics[activeStep]}
            alt='screesnshots'
          />

        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
        <h3 style={{borderBottom:'dotted',fontSize:30}}>Summary</h3>
        <h3>{chosenProject.text}</h3>
      </div>

    </div>
  

  

  
    
  )
}




export default ProjectDetails
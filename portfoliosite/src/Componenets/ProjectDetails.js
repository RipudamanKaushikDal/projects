import React,{useState} from 'react';
import {  useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {useParams} from "react-router-dom";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images/projectimages', false, /\.(png|jpe?g|svg)$/));


const projectStuff ={
    attendance_app:{
      pics:[images['DatabaseScreen.jpg'],images['Face404.png']],
      text:"This app was made in python and kivy"
    }, 

    search_gallery:{
      pics:[images['search1.png'],images['search2.png'],images['search3.png'],images['search4.png'],images['search5.png']],
      text:"This app was made using Docker, React and Flask"
    },    
    
    watch_drone:{
        pics:[images['watchdrone1.jpg'],images['watchdrone2.jpg'],images['watchdrone3.jpg']],
        text:"This was made using React JS"
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

        <h3>{chosenProject.text}</h3>
      </div>

    </div>
  

  

  
    
  )
}




export default ProjectDetails
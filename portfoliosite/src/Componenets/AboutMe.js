import React from 'react'
import Chip from '@material-ui/core/Chip';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    skills: {
        paddingTop: 320,
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
        <>
            <h1>About ME</h1>
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


        
        </>
    )
}

export default AboutMe
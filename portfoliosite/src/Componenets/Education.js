import React from 'react';
import Grid from '@material-ui/core/Grid';

function Education (props) {
    return (
        <Grid container >
            <Grid item xs={2} md={4} style={{padding:'3rem 0 0 0.5rem'}}>
                <h4>{props.startYear} - {props.endYear}</h4>
            </Grid>
            <Grid item xs={10} md={8} style={{padding:'3rem 0 0 5rem'}}>
                <h2 style={{marginTop:'0.5rem'}}>{props.schoolName}</h2>
                <h4>{props.schoolAchievement} <br /> {props.schoolgpa}</h4>
            </Grid>
        </Grid>
    )
}

export default Education
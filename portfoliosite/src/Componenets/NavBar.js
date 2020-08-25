import React,{useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Routes from '../Routes';
import { Box,Avatar } from '@material-ui/core';
import avatar from '../images/avatar.jpeg';
import BottomNav from './BottomNav';


const useStyles = makeStyles((theme) => ({
  link:{
    textDecoration: 'none',
    color:theme.palette.text.primary
  }, 

  sideBar:{
    width: 200,
    height:'100%', 
    background:'#909090',
    opacity:0.9
  },

  useravatar:{
    display: 'block',
    margin:'0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13)

  },

  listItem:{
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'tomato',
      },

  },

  navbar:{
    position:'static',
    background: '#c31432',  /* fallback for old browsers */
    // eslint-disable-next-line
    background: '-webkit-linear-gradient(to bottom, #240b36, #c31432)',
    // eslint-disable-next-line
    background: 'linear-gradient(to bottom, #240b36, #c31432)' 
  },

}));
 
function Navigation(){

  const classes=useStyles();

  const [state,setState] = useState({
    left:false
  });

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, left:open})
  }

  return(
    <>

     <Box component='nav'>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <IconButton>
            <DoubleArrowRoundedIcon style={{color:'white',marginLeft:-2}} onClick={toggleDrawer(true)} />
          </IconButton>
          <Typography variant='h5'>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
     </Box>

     <SwipeableDrawer 
        anchor='left'
        open={state.left}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >

      <Box className={classes.sideBar} component='div' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <Avatar  className={classes.useravatar} src={avatar} alt='User' />
        <Divider />
        <List>
          {Routes.map((element,key) => (
            <ListItem button key={key} component={Link} to={element.path} className={classes.listItem}>
              <ListItemIcon >{element.listicon}</ListItemIcon>
              <ListItemText> {element.sidebarName} </ListItemText>
            </ListItem>

          ))}
        </List> 
      </Box>
      <BottomNav />
      </SwipeableDrawer>   
    </>

  )

}


export default Navigation
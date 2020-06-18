import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {NavLink, withRouter} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Routes from '../Routes';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  link:{
    textDecoration: 'none',
    color:theme.palette.text.primary
  },  
  navbar:{
    background: '#c31432',  /* fallback for old browsers */
    // eslint-disable-next-line
    background: '-webkit-linear-gradient(to bottom, #240b36, #c31432)',
    // eslint-disable-next-line
    background: 'linear-gradient(to bottom, #240b36, #c31432)' 
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    opacity:0.8,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    opacity:0.4,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 // const drawerElements = [['Resume',<DescriptionRoundedIcon/>],['Projects',<AccountTreeRoundedIcon />],['About Me',<EmojiPeopleRoundedIcon />],['Contacts',<ContactMailRoundedIcon />]];

 const activeRoute = (routeName) => {
  return props.location.pathname === routeName ? true : false;
}

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, classes.navbar,{
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <DoubleArrowRoundedIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper:clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <MenuOpenRoundedIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {Routes.map((element) => (
           <NavLink to={element.path} className={classes.link}>
            <ListItem button onClick={activeRoute(element.path)}  >
              <ListItemIcon >{element.listicon}</ListItemIcon>
              <ListItemText primary={element.sidebarName} />
            </ListItem>
           </NavLink>
          ))}
        </List>
      </Drawer>
      </div>
  )
}

export default withRouter(NavBar)
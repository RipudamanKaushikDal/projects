import React from 'react';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Resume from './Componenets/Resume';
import Projects from './Componenets/Projects';
import Contacts from './Componenets/Contacts';
import AboutMe from './Componenets/AboutMe';
import Homepage from './Componenets/Homepage';

const Routes = [
    {
      path: '/',
      sidebarName: 'Home',
      listicon:<HomeRoundedIcon/>,
      component: Homepage
    },

    {
      path: '/resume',
      sidebarName: 'Resume',
      listicon:<DescriptionRoundedIcon/>,
      component: Resume
    },
    {
      path: '/projects',
      sidebarName: 'Projects',
      listicon:<AccountTreeRoundedIcon />,
      component: Projects
    },
    {
      path: '/aboutme',
      sidebarName: 'About Me',
      listicon: <EmojiPeopleRoundedIcon />,
      component: AboutMe
    },
    {
      path: '/contact',
      sidebarName: 'Contact',
      listicon:<ContactMailRoundedIcon />,
      component: Contacts
    }
  ];

export default Routes
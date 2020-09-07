import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit">
          <nav>
               <a href="/profile">Profile</a>
               <a href="/experence">Experence</a>
               <a href="/education">Education</a>
               <a href="/task">Task</a>
           </nav>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

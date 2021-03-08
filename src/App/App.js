
import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu.js';
 import Header from '../components/Header';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  
appMain: {
   paddingLeft: '320px',
   width: '100px',
}  
})

function App() {
  
   const classes = useStyles();
  
  return (
    <>
  <SideMenu />
   {/* { <div className={classes.appMain}>here we go to the course</div> } */}
  { <Header /> }
  </>
  );
}

export default App;

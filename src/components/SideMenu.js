import React from 'react';

import { makeStyles, withStyles } from "@material-ui/core/styles";

// withstyles & makestyles 

const style = ({
 sideMenu : {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  left: '0px',
  width: '220px',
  height: '100%',
  backgroundColor:'aqua',
    },
});
const SideMenu = (props) => {  
                           
   const { classes } = props;                                
  console.log(classes);
    return(
        <div className={classes.sideMenu}></div>
      
    )
}
export default withStyles(style)(SideMenu);
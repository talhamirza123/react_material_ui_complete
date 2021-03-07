import React from 'react';

import { makeStyles, withStyles } from "@material-ui/core/styles";

// withstyles & makestyles 

const useStyles =  makeStyles ({
 sideMenu : {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  left: '0px',
  width: '220px',
  height: '100%',
  backgroundColor:'red',
    },
});
export default function SideMenu () {  
                                    
  const classes = useStyles();
  console.log(classes);
    
    
    return(
        <div className={classes.sideMenu}></div>
      
    )
}

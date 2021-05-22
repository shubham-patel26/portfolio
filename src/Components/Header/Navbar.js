import React from 'react';
import { Toolbar,IconButton,Button, makeStyles } from '@material-ui/core';

import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

const useStyles = makeStyles({
    navItems:{
        marginLeft: "auto",
    }
})

function Navbar() {
    const classes = useStyles();
    return (
        <>
            <span className={classes.navItems}>
                <Button color="inherit">Projects</Button>
                <Button color="inherit">Contact</Button>
                <IconButton aria-label="menu">
                <Brightness2OutlinedIcon />
                </IconButton>
                
            </span>
        
        </>
    )
}

export default Navbar

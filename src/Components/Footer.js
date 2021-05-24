import { Grid, makeStyles,IconButton, Avatar,useTheme, useMediaQuery,Tooltip } from '@material-ui/core';
import React from 'react';
import Logo from './Logo';

const useStyle = makeStyles({
    footer:{
        width:"100%",
        height:"auto",
        backgroundColor:"rgb(227, 225, 213)",
        padding:"4rem 0rem 2rem",
        color:"rgb(0, 0, 0)",
        
        
    }
})

function Footer() {
    const classes = useStyle();
    const theme= useTheme();
    const isMatched = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatched)
    return (
        <div className={classes.footer}>
            <Grid container style={isMatched?{textAlign:"center"}:{paddingLeft:"7rem",justifyContent:"flex-end"}}>
                <Grid item md={6} xs={12} >
                    <h1>Shubham Kumar</h1>
                    <p>© All rights reserved to me</p>
                    <address>
                        Written by <a href="mailto:webmaster@example.com">Jon Doe</a>
                        Bokaro
                    </address>
                </Grid>

                <Grid item md={6} xs={12} style={{}} >

                <Logo />
                </Grid>

            </Grid>
        </div>
    )
}

export default Footer;

import { Grid, makeStyles,IconButton, Avatar,useTheme, useMediaQuery,Tooltip } from '@material-ui/core';
import React from 'react';
import Logo from './Logo';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';

const useStyle = makeStyles({
    footer:{
        width:"100%",
        height:"auto",
        backgroundColor:"rgb(227, 225, 213)",
        padding:"4rem 0rem 2rem",
        marginTop:"10%",
        color:"rgb(0, 0, 0)",
        
        
    }
})

function Footer() {
    const classes = useStyle();
    const theme= useTheme();
    const isMatched = useMediaQuery(theme.breakpoints.down('sm'));
    // console.log(isMatched)
    return (
        <div className={classes.footer}>
            <Grid container style={isMatched?{textAlign:"center"}:{paddingLeft:"7rem",}}>
                <Grid item md={6} xs={12} >
                    <h1>Shubham Kumar</h1>
                    <p>© All rights reserved to me</p>
                    <address>
                        <div>
                        Developed by <a href="mailto:shubham763116@gmail.com">Shubham</a><br />
                        Bokaro Steel City <br/>
                        Jharkhand (827009)
                        </div>
                        
                    </address>
                </Grid>

                <Grid item md={6} xs={12} style={{textAlign:"center",}} >

                
                    <a href="tel:8873050525"> 
                    <IconButton style={{backgroundColor:'white',marginRight:"5px",color:"black"}}> <CallIcon /> </IconButton>
                    </a>
                
                    <a href="mailto:shubham763116@gmail.com" ><IconButton style={{backgroundColor:'white',marginLeft:'5px',color:"black"}}> <MailIcon />  </IconButton></a>
               
                </Grid>

            </Grid>
        </div>
    )
}

export default Footer;

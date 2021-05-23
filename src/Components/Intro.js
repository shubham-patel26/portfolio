import { Grid,Button,IconButton, Avatar,makeStyles } from '@material-ui/core'
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    intro__hello:{
        "& h3":{
            'font-size': '3rem',
            fontWeight:"900",
            
        },
        "& p": {
            'font-size':"1.8rem",
            fontWeight:"bold",
            color:"rgb(112, 112, 112)",
            overflowWrap: 'break-word',
            marginTop:"20px",
            width:"80%"
            
        },
       
        'font-size': '12px',
    },
    intro__image:{
        marginLeft:"30px",
        marginTop:"20px",
    },
    intro__button:{
        marginTop:"20px",
        marginRight:"10px",
        display:"flex",
    },
    intro__links:{
        marginTop:"20px",
        paddingRight:"10px"
    }
})
function Intro() {
    const classes = useStyles();
    return (
        <Grid container style={{Color:'black', margin:'100px 10px 0 0',}}>
            <Grid item sm={12} md={6}>
            
            <div className={classes.intro__hello}>
            <h3> <span> Hello </span> 👋</h3>  
            <p> I'm Shubham and I am a 3rd year CSE student at NIT Jamshedpur! </p> 
            </div>
             
            <div className={classes.intro__button}>
                <div style={{padding:"0 10px 0 0"}}>
                <Button  size="large" variant="contained" color="primary">
                    Hire me
                </Button>
                </div>
                <div style={{padding:"0 0 0 10px"}}>
                    <Button size="large" variant="contained" color="primary">
                    View CV
                    </Button>
                </div>
            
            
            </div>
            <div className={classes.intro__links}>
                <IconButton  >
                    <GitHubIcon />
                </IconButton>

                <IconButton  >
                    <TwitterIcon />
                </IconButton>

                <IconButton  >
                    <LinkedInIcon />
                </IconButton>
            
                <IconButton>
                    <Avatar alt="Remy Sharp" src="https://img-premium.flaticon.com/png/512/61/61109.png?token=exp=1621712118~hmac=95872ee2c98e2732b945382582bd6ea8" />
                </IconButton>
            </div>

            </Grid>
            <Grid item sm={12} md={6} style={{justifyContent:'center'}}>
                <div className={classes.intro__image}>
                    <img style={{height:"360px" , width:"360px",objectFit:"fill"}} src="https://aakankshaq-profile.netlify.app/static/Header-32914015ef625514897dfc9540b13aed.png" alt=' ' />
                </div>
                
            </Grid>
        </Grid>
    
    )
}

export default Intro;

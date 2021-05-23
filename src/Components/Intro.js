import { Grid,Button,IconButton, Avatar } from '@material-ui/core'
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Intro() {
    return (
        <Grid container style={{Color:'black' }}>
            <Grid item sm={12} md={6}>
                
            <h3> <span> Hello </span> 👋</h3>  
            <p>
                I'm Shubham and I am a 3rd year CSE student at NIT Jamshedpur!
            </p>  
            <div>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            </div>
            <div>
            <IconButton >
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
                <div >
                    <img style={{height:"370px" , width:"370px",objectFit:"fill"}} src="https://aakankshaq-profile.netlify.app/static/Header-32914015ef625514897dfc9540b13aed.png" alt=' ' />
                </div>
                
            </Grid>
        </Grid>
    
    )
}

export default Intro;

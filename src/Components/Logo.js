import React from 'react';
import {Tooltip, IconButton, Avatar} from '@material-ui/core';


function Logo() {
    return (
        <>
        <Tooltip title="Twitter" aria-label="twitter">
            <IconButton>
                <Avatar alt="twitter" src="https://p.kindpng.com/picc/s/391-3910359_transparent-white-png-social-media-icons-twitter-icon.png" />
            </IconButton>
        </Tooltip>
        <Tooltip title="Github" aria-label="github">
            <IconButton>
                <Avatar alt="github" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
            </IconButton>
        </Tooltip> 
        
        <Tooltip title="Linkedin" aria-label="linkedin">
            <IconButton>
                <Avatar alt="Linkedin" src="https://pngimage.net/wp-content/uploads/2018/06/logo-linkedin-png-blanc-3.png" />
            </IconButton>
        </Tooltip>

        <Tooltip title="HackerEarth" aria-label="hacherearth">
            <IconButton>
                <Avatar alt="hacherearch" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/HackerEarth_logo.png/480px-HackerEarth_logo.png" />
            </IconButton>
        </Tooltip>

        <Tooltip title="Codeforces" aria-label="codeforces">
            <IconButton>
                <Avatar alt="Codeforces" src="https://news.itmo.ru/images/news/big/917925.jpg" />
            </IconButton>
        </Tooltip>
        </>
    )
}

export default Logo;

import React from 'react';
import SimpleCard from './SimpleCard';
import {Grid} from '@material-ui/core';
function ShowProject({ repos }) {
    return (
        repos.map(repo => {
            return (
                <Grid item xs={12} sm={6} md={4}>
                    <SimpleCard repo={repo} />
                </Grid>
            )
            
        })
    )
}

export default ShowProject;

import { Box, Grid, makeStyles, TextField,Button } from '@material-ui/core'
import React, { useState } from 'react'

const initialState = {
    fullName: '',
    email: '',
    message: '',
}

const useStyle = makeStyles({
    form :{
       height:"380px",
        
    },
    formLabel :{
        width:"100%",
        height:"auto",
        margin:"5px 10px 10px 0",
        padding:"5px 0 5px 0",
    },
    
})
function ContactForm() {
    const [values, setValues] = useState(initialState);
    

    const classes = useStyle();
    const handleChange = (e) =>{
        const {name, value} = e.target;
        
        setValues({
            ...values, [name]:value,
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        alert(values);
        
    }
    return (
        <>
        <Box clone order={{sm:2, md: 1}}>
            <Grid item sm={12} md={7} style={{marginBottom:"20px",paddingBottom:"10px"}}>
                <form  >
                    <div className={classes.form}>
                    <div className={classes.formLabel}>
                    <TextField
                        autoComplete="off"
                        style={{width:"90%"}}
                        variant="outlined"
                        size="small"
                        label="Full Name*"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                    />
                    </div>
                    
                    <div className={classes.formLabel}>
                    <TextField
                        autoComplete="off"
                        style={{width:"90%"}}
                        variant="outlined"
                        size="small"
                        label="Email*"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    </div>
                    
                    <div className={classes.formLabel} >
                    <TextField
                        autoComplete="off"
                        multiline="true"
                        rows="11"
                        rowsMax="11"
                        size="small"
                        style={{width:"90%"}}
                        variant="outlined"
                        label="Message*"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                    />
                    </div>
                    </div>
                    

                    <div>
                    <Button variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>
                    </div>
                        
                    
                </form>
                
                
            </Grid>
        </Box>
            
        </>
    )
}

export default ContactForm;
